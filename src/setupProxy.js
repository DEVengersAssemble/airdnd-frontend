/* eslint-disable no-undef */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v2/',
    createProxyMiddleware({
      target: 'https://www.airbnb.co.kr',
      changeOrigin: true,
    }),
  );
};
