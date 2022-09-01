// Models
const { Registration } = require('../models/registration.model');

const getAllRegistrations = async (req, res) => {
	try {
		const registrations = await Registration.findAll();

		res.status(200).json({
			status: 'success',
			data: {
				registrations,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const getRegistrationsById = async (req, res) => {
	try {
		const { id } = req.params;
		const registration = await Registration.findOne({ where: { id } });


		if (!registration) {
			return res.status(404).json({
				status: 'error',
				message: 'Registration not found',
			});
		}
		res.status(200).json({
			status: 'success',
			data: { registration },
		});

	} catch (error) {
		console.log(error);
	}
};

const createRegistration = async (req, res) => {
	try {
		const { entranceTime, exitTime, status } = req.body;

		const newRegistration = await Registration.create({ entranceTime, exitTime, status });

		// 201 -> Success and a resource has been created
		res.status(201).json({
			status: 'success',
			data: { newRegistration },
		});
	} catch (error) {
		console.log(error);
	}
};

const updateRegistration = async (req, res) => {
	try {
		const { exitTime, status } = req.body;
		const { id } = req.params;

		// Check if the user exists before update
		const registration = await Registration.findOne({ where: { id } });

		// If user doesn't exist, send error message
		if (!registration) {
			return res.status(404).json({
				status: 'error',
				message: 'Registration not found',
			});
		}

		// Method 1: Update by using the model
		// await User.update({ name }, { where: { id } });

		// Method 2: Update using a model's instance
		await registration.update({ exitTime, status });

		res.status(200).json({
			status: 'success',
			data: { registration },
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteRegistration = async (req, res) => {
	try {
		const { id } = req.params;

		// Check if user exists before deletion
		const registration = await Registration.findOne({ where: { id } });

		// If user doesn't exist, send error message
		if (!registration) {
			return res.status(404).json({
				status: 'error',
				message: 'Registration not found',
			});
		}

		// If user exist, remove it from db

		// Method 1: Delete by using the model
		// User.destroy({ where: { id } })

		// Method 2: Delete by using the model's instance
		// await user.destroy();

		// Method 3: Soft delete
		await registration.update({ status: 'cancelled' });

		res.status(204).json({ status: 'success' });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllRegistrations,
	getRegistrationsById,
	createRegistration,
	updateRegistration,
	deleteRegistration,
};
