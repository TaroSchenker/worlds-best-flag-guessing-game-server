const express = require('express')
const HighScore = require('../models/HighScore')
const mongoose = require('mongoose');

// get all highscores
const getHighScores = async (req, res, next) => {
    console.log('get all highscores')
    const highScores = await HighScore.find({}).sort({score:-1})
    res.status(200).json(highScores)
} 

// create a new high score
const createHighScore = async (req, res, next) => {
    console.log('highscore post ',req.body)
    const { displayName, score } = req.body
    //add doc to db
    try{
        const highScore = await HighScore.create({displayName, score })
        console.log('highscore', highScore)
        res.status(200).json(highScore)
    }catch(err){
        res.status(400).json({msg: err.message})
    }
}


module.exports = {getHighScores, createHighScore }
