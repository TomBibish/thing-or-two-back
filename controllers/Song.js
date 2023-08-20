const Song = require('../models/Song');

module.exports = {
    getAllSongs:  (req, res) => {
        Song.findAll({
            order:[['Band', 'ASC']],
            raw : true})
        .then(songs =>{
          res.status(200).json({
            songs
          })})
        .catch(err =>{console.log(err)})}
}