'use strict';
const { Model, Sequelize } = require('sequelize');

const connectionString = require('../config/connectionString')

class User extends Model {}

User.init({
    name: Sequelize.STRING,
    manager_id: Sequelize.INTEGER,
  },
  {
    sequelize: connectionString,
    tableName: 'Users'
  }
);

module.exports = User;
