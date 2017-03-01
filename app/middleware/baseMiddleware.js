var baseMiddleware = class BaseMiddleware {
 constructor(){}

 //Resolving custom middlewares
 addMiddlewares(router, chosen) {
    var obj = this;

     var avbMiddlewares = Object.getOwnPropertyNames( Object.getPrototypeOf(obj))
             .filter(function(prop){return prop.startsWith('__') });

     if(chosen.indexOf('*').toString() !== '-1'){
       for (var key in avbMiddlewares) {
         router.use(obj[avbMiddlewares[key]]);
       }
     }else{
       for (var key in avbMiddlewares) {
         if(chosen.indexOf(avbMiddlewares[key]).toString() !== '-1'){
           router.use(obj[avbMiddlewares[key]]);
         }
       }
     }
     return router;
 }
};

module.exports = baseMiddleware;
