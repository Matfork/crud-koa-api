  module.exports.addRoutes = function(app){

    app.use( async (ctx, next) => {
      await next();

      if (404 != ctx.status) return;
      ctx.body = {code: 404, message:'Page wansn\'t found'};

      // switch (ctx.accepts('html', 'json')) {
      //   case 'html':
      //     ctx.type = 'html';
      //     ctx.body = '<p>Page Not Found</p>';
      //     break;
      //   case 'json':
      //     ctx.body = {
      //       message: 'Page Not Found'
      //     };
      //     break;
      //   default:
      //     ctx.type = 'text';
      //     ctx.body = 'Page Not Found';
      // }
    });

    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        console.log(err);

        // will only respond with JSON
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
          code : ctx.status,
          error: err.toString()
        };
      }
    });

    return app;
}
