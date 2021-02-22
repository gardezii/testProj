const Sequelize = require('sequelize');
var sequelize = "";


if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL)
}
else {
  sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  });
}

module.exports = sequelize;
