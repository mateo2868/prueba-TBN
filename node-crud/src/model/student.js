const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

class Student extends Model {}
Student.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER, 
    allowNull: false
  }
}, { sequelize, modelName: 'student' });

module.exports = Student;