const express = require('express')
const highScoreController = require('../controllers/highScoreController')
const router = express.Router()
const mongoose = require('mongoose')

// high score routes
//get all high scores 
router.get('/', highScoreController.getHighScores)
//create high score
router.post('/', highScoreController.createHighScore)

module.exports = router
