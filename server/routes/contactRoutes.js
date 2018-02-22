const { Router } = require('express');
const { getToken } = require('../controllers/salesforce/auth.js');
const { findById } = require('../controllers/salesforce/contact.js');

module.exports = (app) => {
  console.log('Getting contact')
  const contactRoute = Router();

  app.use('/contact', contactRoute);

  contactRoute.get('/', getToken, (req, res) => {
    console.log('REQUEST', getToken)
    res.end()
  });
}
