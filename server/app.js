/*Initialize Environment*/
const { NODE_ENV, PORT } = process.env;
if (NODE_ENV !== 'production' && NODE_ENV !== 'test') {
  require('dotenv').config();
}

/*Initialize Express*/
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(__dirname));

/*Initialize Webpack*/
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require(NODE_ENV === 'production' ? '../webpack.prod.js' : '../webpack.dev.js');
const compiler = webpack(config);
const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
});
app.use(webpackDevMiddlewareInstance);
if (process.env.HOT) {
  app.use(webpackHotMiddleware(compiler));
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  API Routes
* * * * * * * * * * * * * * * * * * * * * * * * * * */
const contactRouter = require('./routes/contactRoutes.js');
const caseRouter = require('./routes/caseRoutes.js');

contactRouter(app);
caseRouter(app);

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

module.exports = app;