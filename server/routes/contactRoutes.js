const { Router } = require('express');
const { getToken } = require('../controllers/salesforce/auth.js');
const { findById } = require('../controllers/salesforce/contact.js');

const contactRoute = Router();

contactRoute.get('/', getToken, findById);

exports.contactRouter = contactRoute;