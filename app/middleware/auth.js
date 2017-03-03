// get an instance of the router for api routes
var BaseMiddleware = require('./baseMiddleware'),
    authController = require('../controllers/authController');

var authM = class AuthMiddlware extends BaseMiddleware{

    constructor() {
       super();
   }

   //Add your middlewares logic here
    async __verifyToken(ctx, next) {
        let token = ctx.request.body  && ctx.request.body.token  ? ctx.request.body.token  : undefined ||
                    ctx.request.query && ctx.request.query.token ? ctx.request.query.token : undefined ||
                    (ctx.request.headers['authorization'] ? ctx.request.headers['authorization'].split(' ')[1] : '');

        let result = authController.verifyToken(token);

        if(result.error){
            ctx.status = result.code;
            ctx.body = result;
        }else if(result.data){
          if(ctx.headers['verifyonly']){
            ctx.status = result.code;
            ctx.body = {code: 200, data: result.data};
          }else{
            await next();
          }
        }else{
            ctx.status = 500;
            ctx.body = {code: 500, error: 'Unexpected Error on server'};
        }
    }

    async __generateToken (ctx, next) {
        console.log('Everything looks good');
        await next();
    }

  //End of your middlewares logic
}

module.exports = new authM();
