const express = require('express');

// Controllers
const {
	getAllRegistrations,
	getRegistrationsById,
	createRegistration,
	updateRegistration,
	deleteRegistration,
} = require('../controllers/registrations.controller');

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations);

registrationsRouter.get('/:id', getRegistrationsById);

registrationsRouter.post('/', createRegistration);

registrationsRouter.patch('/:id', updateRegistration);

registrationsRouter.delete('/:id', deleteRegistration);

module.exports = { registrationsRouter };
