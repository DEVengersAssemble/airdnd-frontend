const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/autocomplete',
    createProxyMiddleware({
      target: 'https://www.airbnb.co.kr',
      changeOrigin: true,
    }),
  );
};
