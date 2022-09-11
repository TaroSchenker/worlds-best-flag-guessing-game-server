const mongoose = require('mongoose')

const Schema = mongoose.Schema

const highScoreSchema = new Schema({
    displayName: {
        type: String,
        required: true,
    },
    score: {
        type: Number, 
        required: true,
    },
}, {timestamps: true})

module.exports = mongoose.model('HighScore', highScoreSchema)
