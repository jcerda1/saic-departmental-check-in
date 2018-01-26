
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  require('dotenv').config();
}

const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const { contactRouter } = require('./routes/contactRoutes.js');
const { caseRouter } = require('./routes/caseRoutes.js');

const app = express();

const port = process.env.PORT || 3000;

let config;
(port === 3000)? config = require('../webpack.dev.js') : config = require('../webpack.prod.js');
const compiler = webpack(config);

app.use(express.static(__dirname));

const webpackDevMiddlewareInstance = webpackDevMiddleware( compiler, {
  publicPath: config.output.publicPath
});

app.use(webpackDevMiddlewareInstance);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(__dirname));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  API Routes
* * * * * * * * * * * * * * * * * * * * * * * * * * */
app.use('/contact', contactRouter);
app.use('/cases', caseRouter)

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Fallback Routes
* * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Compression to g-zip*/
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'))
});

const server = app.listen(port || 3000);
console.log('server is listening on port ' + port);

module.exports.server = server;
module.exports.app = app;
module.exports.webpackDevMiddlewareInstance = webpackDevMiddlewareInstance;