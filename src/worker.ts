import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
    ASSETS: {
        fetch: (request: Request) => Promise<Response>;
    }
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('*', cors())

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
};

app.get('/.well-known/matrix/server', (c) => {
    return c.json({
        "m.server": "matrix.iquxae.org:443"
    }, 200, corsHeaders)
})

app.get('/.well-known/matrix/client', (c) => {
    return c.json({
        "m.homeserver": { "base_url": "https://matrix.iquxae.org" },
        "m.identity_server": { "base_url": "https://vector.im" }
    }, 200, corsHeaders)
})

// Serve static assets with support for clean URLs
app.all('*', async (c) => {
    const url = new URL(c.req.url)
    let pathname = url.pathname

    // Try to serve the asset directly
    let response = await c.env.ASSETS.fetch(c.req.raw)

    // If not found and path doesn't have extension, try adding .html
    if (response.status === 404 && !pathname.includes('.') && pathname !== '/') {
        const htmlUrl = new URL(c.req.url)
        htmlUrl.pathname = pathname.endsWith('/')
            ? pathname + 'index.html'
            : pathname + '.html'

        const htmlRequest = new Request(htmlUrl.toString(), c.req.raw)
        response = await c.env.ASSETS.fetch(htmlRequest)
    }

    // If still 404, serve index.html for SPA fallback (optional, for client-side routing)
    if (response.status === 404) {
        const indexUrl = new URL(c.req.url)
        indexUrl.pathname = '/index.html'
        const indexRequest = new Request(indexUrl.toString(), c.req.raw)
        response = await c.env.ASSETS.fetch(indexRequest)
    }

    return response
})

export default app
