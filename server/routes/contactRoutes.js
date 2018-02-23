const { Router } = require('express');
const { getToken } = require('../controllers/salesforce/auth.js');
const { findById } = require('../controllers/salesforce/contact.js');

module.exports = (app) => {
  const contactRoute = Router();
  app.use('/contact', contactRoute);
  contactRoute.get('/', getToken, findById);
}
