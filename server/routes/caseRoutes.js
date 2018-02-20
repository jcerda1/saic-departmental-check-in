const { Router } = require('express');
const { getToken } = require('../controllers/salesforce/auth.js');
const {
  findByContactId,
  createNew,
  updateStatus
} = require('../controllers/salesforce/case.js');

module.exports = (app) => {
  const caseRoute = Router();
  app.use('/cases', caseRoute);
  caseRoute.get('/', getToken, findByContactId);
  caseRoute.post('/', getToken, createNew);
  caseRoute.put('/', getToken, updateStatus);
};