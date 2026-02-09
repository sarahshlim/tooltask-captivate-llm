export default {
  async fetch(request, env) {
    return new Response(JSON.stringify({ ok: true, message: "Worker is live" }), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
