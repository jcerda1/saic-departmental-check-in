if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  require('dotenv').config();
}

const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
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

const server = app.listen(port || 3000);
console.log('server is listening on port ' + port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(__dirname));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Salesforce Controllers
* * * * * * * * * * * * * * * * * * * * * * * * * * */
const auth = require('./controllers/salesforce/auth.js');
const contact = require('./controllers/salesforce/contact.js');
const supportCase = require('./controllers/salesforce/case.js');

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  API Routes
* * * * * * * * * * * * * * * * * * * * * * * * * * */
app.get('/contact', auth.getToken, contact.findById);

app.get('/cases', auth.getToken, supportCase.findByContactId);

app.post('/cases', auth.getToken, supportCase.createNew);

app.put('/cases', auth.getToken, supportCase.updateStatus);
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Fallback Routes
* * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Compression to g-zip*/
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req,res) =>{
  res.sendFile(path.resolve(__dirname, '../index.html'))
});

module.exports.server = server;
module.exports.app = app;
module.exports.webpackDevMiddlewareInstance = webpackDevMiddlewareInstance;