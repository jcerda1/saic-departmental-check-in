const { Router } = require('express');
const { getToken } = require('../controllers/salesforce/auth.js');
const {
  findByContactId,
  createNew,
  updateStatus
} = require('../controllers/salesforce/case.js');

const caseRoute = Router();

caseRoute.get('/', getToken, findByContactId);
caseRoute.post('/', getToken, createNew);
caseRoute.put('/', getToken, updateStatus);

exports.caseRouter = caseRoute;