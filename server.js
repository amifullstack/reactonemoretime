const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');


const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')

// ----- Require routes ------
const index = require('./Routes/index')

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Parse request of content application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parser request of content application/json
app.use(bodyParser.json());

// Cookie-Parser
app.use(cookieParser());


// Webpack Server
const webpackCompiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  status: {
    color: true,
    chunks: true,
    'errors-only': true,
  },
}));
app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
}));


// ---- use routes----
app.use('/*', index);


module.exports = app;