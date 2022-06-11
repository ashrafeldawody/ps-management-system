const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/user.controller');

urlRoutes.post('/', controller.createUser);
urlRoutes.post('/login', controller.login);

module.exports = urlRoutes;
