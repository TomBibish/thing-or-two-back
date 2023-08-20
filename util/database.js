const Sequelize = require('sequelize');

const sequelize = new Sequelize('songs', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;