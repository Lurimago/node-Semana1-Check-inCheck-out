const { Sequelize, DataTypes } = require('sequelize');

// Establish db connection
const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'turmanyay123L',
	port: 5432,
	database: 'registrationsdb',
	logging: false,
});

module.exports = { db, DataTypes };
