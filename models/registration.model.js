const { db, DataTypes } = require('../utils/database.util');

const Registration = db.define('registration', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	entranceTime: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	exitTime: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Registration };
