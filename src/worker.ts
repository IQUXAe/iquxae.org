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

app.all('*', async (c) => {
    try {
        return await c.env.ASSETS.fetch(c.req.raw)
    } catch (e) {
        return c.text('Internal Server Error: ' + e, 500)
    }
})

export default app
