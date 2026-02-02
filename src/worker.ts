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

// app.all('*') catch-all removed. 
// We rely on Cloudflare's default behavior for static assets or specific matching.
// If this returns 404 for assets, we confirmed ASSETS binding is missing and need another strategy.


export default app
