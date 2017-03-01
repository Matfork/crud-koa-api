 var
  authController = require('../controllers/authController'),
  authMiddleware = require('../middleware/auth'),
  Router = require('koa-router'),
  rLogin = new Router();

module.exports.addRoutes = function(app){

  rLogin.get('/', function (ctx, next) {ctx.body = 'Welcome!';});
  rLogin.post('/auth/login', authController.login);
  rLogin.post('/auth/verify', authMiddleware.__verifyToken);

  app
    .use(rLogin.routes())
    .use(rLogin.allowedMethods());

  return app;
}
