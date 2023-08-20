const express = require('express');
const router = express.Router();
const getAllSongs = require('../controllers/Song')

router.get('/', getAllSongs.getAllSongs);

module.exports = router;