const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/autocomplete',{target:'https://www.airbnb.co.kr'})),
  app.use(proxy('/api/server',{target:'http://localhost:8080'})),
}