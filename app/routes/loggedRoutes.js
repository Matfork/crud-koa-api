 var authorController = require('../controllers/authorController'),
  bookController = require('../controllers/bookController'),
  userController = require('../controllers/userController'),
  authMiddleware = require('../middleware/auth'),
  Router = require('koa-router'),
  rAuthor = new Router({prefix: '/api/author'}),
  rBook = new Router({prefix: '/api/book'}),
  rUser = new Router({prefix: '/api/user'});

  module.exports.addRoutes = function(app){

    //Adding Middlewares for each router (This must be first step always before routing)
      rAuthor = authMiddleware.addMiddlewares(rAuthor, ['*']);
      rBook = authMiddleware.addMiddlewares(rBook, ['*']);
      rUser = authMiddleware.addMiddlewares(rUser, ['*']);

    //Setting Routers
      rAuthor.get('/', authorController.index);
      rAuthor.get('/getAllMap', authorController.getAllMap);
      rAuthor.get('/:id', authorController.show);
      rAuthor.post('/', authorController.create);
      rAuthor.put('/:id', authorController.update);
      rAuthor.del('/:id', authorController.delete);

      rBook.get('/', bookController.index);
      rBook.get('/:id', bookController.show);
      rBook.post('/', bookController.create);
      rBook.put('/:id', bookController.update);
      rBook.del('/:id', bookController.delete);

      rUser.get('/', userController.index);
      rUser.get('/:id', userController.show);
      rUser.post('/', userController.create);
      rUser.put('/:id', userController.update);
      rUser.del('/:id', userController.delete);

    //Exporting routers
      app.use(rAuthor.routes())
         .use(rBook.routes())
         .use(rUser.routes())
         .use(rAuthor.allowedMethods())
         .use(rBook.allowedMethods())
         .use(rUser.allowedMethods());

      return app;
  }
