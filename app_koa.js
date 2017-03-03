'use strict';

require('dotenv').config();
require('babel-core/register');
require('babel-polyfill');

var http = require('http');
var Koa = require('koa');
var cors = require('koa2-cors');
var bodyParser = require('koa-bodyparser');

var app = new Koa();
app.use(cors());
app.use(bodyParser());

//change this to /dist/ if you are planning to use babel in a future
app = require('./app/routes/errorRoutes.js').addRoutes(app);
app = require('./app/routes/genRoutes.js').addRoutes(app);
app = require('./app/routes/loggedRoutes.js').addRoutes(app);

app = require('./config/appListeners.js').addListeners(app);

http.createServer(app.callback()).listen(3002);
