// Root file for backend services
Bun.serve({
   fetch(req) {
      return new Response("Bun!");
   },
});
