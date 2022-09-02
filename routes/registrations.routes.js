const express = require('express');

// Controllers
const {
	getAllRegistrations,
	getRegistrationsById,
	createRegistration,
	updateRegistration,
	deleteRegistration,
} = require('../controllers/registrations.controller');

// Middlewares
const { registrationExists } = require('../middlewares/registrations.middlewares');

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations);

registrationsRouter.get('/:id', getRegistrationsById);

registrationsRouter.post('/', createRegistration);

registrationsRouter.patch('/:id', registrationExists , updateRegistration);

registrationsRouter.delete('/:id', registrationExists, deleteRegistration);

module.exports = { registrationsRouter };
