export default {
  async fetch(request, env) {
    // Serve static assets (your HTML/CSS/images) from the configured assets directory
    return env.ASSETS.fetch(request);
  },
};
