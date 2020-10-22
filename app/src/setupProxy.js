const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/3/gallery/",
    createProxyMiddleware({
      target: "https://api.imgur.com",
      changeOrigin: true
    })
  );
};
