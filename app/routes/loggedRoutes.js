 var authorController = require('../controllers/authorController'),
  bookController = require('../controllers/bookController'),
  userController = require('../controllers/userController'),
  authMiddleware = require('../middleware/auth'),
  Router = require('koa-router'),
  rAuthor = new Router(),
  rBook = new Router(),
  rUser = new Router();

  module.exports.addRoutes = function(app){

    //Adding Middlewares for each router (This must be first step always before routing)
      rAuthor = authMiddleware.addMiddlewares(rAuthor, ['*']);
      // rBook = authMiddleware.addMiddlewares(rBook, ['*']);
      // rUser = authMiddleware.addMiddlewares(rUser, ['*']);

    //Setting Routers


      rAuthor.get('author/', authorController.index);
      rAuthor.get('author/getAllMap', authorController.getAllMap);
      rAuthor.get('author/:id', authorController.show);
      rAuthor.post('author/', authorController.create);
      rAuthor.put('author/:id', authorController.update);
      rAuthor.del('author/:id', authorController.delete);

      // rBook.get('/', bookController.index);
      // rBook.get('/:id', bookController.show);
      // rBook.post('/', bookController.create);
      // rBook.put('/:id', bookController.update);
      // rBook.del('/:id', bookController.delete);
      //
      // rUser.get('/', userController.index);
      // rUser.get('/:id', userController.show);
      // rUser.post('/', userController.create);
      // rUser.put('/:id', userController.update);
      // rUser.del('/:id', userController.delete);

    //Exporting routers
      app.use(rAuthor.routes())
        //  .use(rBook.routes())
        //  .use(rUser.routes())
         .use(rAuthor.allowedMethods())
        //  .use(rBook.allowedMethods())
        //  .use(rUser.allowedMethods());
        ;

      return app;
  }
