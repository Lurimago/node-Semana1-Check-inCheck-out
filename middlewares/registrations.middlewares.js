// Models
const { Registration } = require("../models/registration.model");

const registrationExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    // If user doesn't exist, send error message
    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }

    // req.anyPropName = 'anyValue'
    req.registration = registration;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registrationExists,
};
