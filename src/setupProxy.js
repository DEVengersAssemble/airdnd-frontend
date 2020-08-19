/* eslint-disable no-undef */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
<<<<<<< HEAD
    createProxyMiddleware('/api/', {
=======
    '/api/v2/',
    createProxyMiddleware({
>>>>>>> 7019a4364ea3de5fe4a094cf6879415d8a566c7f
      target: 'https://www.airbnb.co.kr',
      changeOrigin: true,
    }),
  );
};
