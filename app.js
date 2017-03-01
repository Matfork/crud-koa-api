require('dotenv').config()
require('babel-core/register');

const http = require('http');
const Koa = require('koa');
var bodyParser = require('koa-bodyparser');

var app = new Koa();
app.use(bodyParser());

app = require('./app/routes/errorRoutes.js').addRoutes(app);
app = require('./app/routes/genRoutes.js').addRoutes(app);
app = require('./app/routes/loggedRoutes.js').addRoutes(app);
app = require('./config/appListeners.js').addListeners(app);

http.createServer(app.callback()).listen(3002);
// http.createServer(app.callback()).listen(3001);
