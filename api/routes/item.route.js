const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/device.controller');

urlRoutes.get('/', controller.getAll);
urlRoutes.get('/:id', controller.getById);
urlRoutes.post('/', controller.create);
urlRoutes.patch('/:id', controller.update);
urlRoutes.delete('/:id', controller.delete);
module.exports = urlRoutes;
