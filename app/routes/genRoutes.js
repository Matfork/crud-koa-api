 var
  authController = require('../controllers/authController'),
  authMiddleware = require('../middleware/auth'),
  Router = require('koa-router'),
  route  = new Router(),
  rLogin = new Router({prefix: '/api/auth'});

module.exports.addRoutes = function(app){

  route.get('/', function (ctx, next) {ctx.body = 'Welcome to koa api!';});
  rLogin.post('/login', authController.login);
  rLogin.post('/verify', authMiddleware.__verifyToken);

  app.use(route.routes());
  app.use(rLogin.routes()).use(rLogin.allowedMethods());

  return app;
}
