
interface Env {
    ASSETS: {
        fetch: (request: Request) => Promise<Response>;
    };
}

export default {
    async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
        const url = new URL(request.url);

        // CORS headers
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        // Handle OPTIONS requests for CORS preflight
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: corsHeaders,
            });
        }

        // Serve .well-known/matrix/server
        if (url.pathname === "/.well-known/matrix/server") {
            return new Response(JSON.stringify({
                "m.server": "matrix.iquxae.org:443"
            }, null, 2), { // Added indentation for readability
                headers: {
                    "Content-Type": "application/json",
                    ...corsHeaders,
                },
            });
        }

        // Serve .well-known/matrix/client
        if (url.pathname === "/.well-known/matrix/client") {
            return new Response(JSON.stringify({
                "m.homeserver": { "base_url": "https://matrix.iquxae.org" },
                "m.identity_server": { "base_url": "https://vector.im" }
            }, null, 2), { // Added indentation for readability
                headers: {
                    "Content-Type": "application/json",
                    ...corsHeaders,
                },
            });
        }

        // For all other requests, fallback to static assets
        if (env.ASSETS) {
            return env.ASSETS.fetch(request);
        }

        return new Response("Not Found", { status: 404 });
    },
};
