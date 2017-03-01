var debug   = require('debug')('myapp:server');

/**
 * Event listener for HTTP server "error" event.
 */
var onError = (err, ctx) => {
    console.log('server error', err);
    ctx.body = {code:500, error: err};
}

/**
 * Event listener for HTTP server "listening" event.
 */
var onListening = () => {
  var addr = this.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports.addListeners = function(app){
  app.on('error', onError);
  app.on('listening', onListening);
  return app;
}
