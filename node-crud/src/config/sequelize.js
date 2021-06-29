const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('crud', 'root', '', {
  host: 'localhost',
  port: '3307',
  dialect: 'mysql'
});

module.exports = { sequelize };