const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Song = sequelize.define('song', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  song_name:Sequelize.STRING,
  band:Sequelize.STRING,
  year:Sequelize.INTEGER
});

module.exports = Song;