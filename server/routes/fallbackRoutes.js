const { Router } = require('express');
const path = require('path');

module.exports = (app) => {
  app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../index.html'));
  });
};
