const fs = require("fs");
const csv = require("csv-parser");
const Song = require('../models/Song')
const replaceJSONProperty = require('replace-json-property');


const creatSongDb = function() {
    replaceJSONProperty.replace('./data/dbStatus.json', 'isEmpty', 'False');
     fs.createReadStream('./data/Songs.csv')
    .pipe(csv({separator:';'}))
    .on('data', (data) => {
      const song_name = data['Song Name'].toLowerCase() ;
      const band = data['Band'].toLowerCase();
      const year = data['Year'];
      Song.create({
        song_name: song_name,
        band: band,
        year: year
      })
    })
}

module.exports = creatSongDb;