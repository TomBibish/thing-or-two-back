const express = require('express');
const app = express();
const port = 4000;
const createSongDb = require('./util/createSongDb');

const sequelize = require('./util/database');
const Song = require('./models/Song');

const cors = require('cors');
app.use(cors());

const songRouter = require('./routes/Song')
const dbStatus = require('./data/dbStatus.json')

app.use('/song', songRouter);

app.listen(port, () => {
  sequelize.sync().then(result =>{
  }).catch(err => console.log(err))
  .then((dbStatus.isEmpty==="True") ? createSongDb : 0)
});