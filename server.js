require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
const mongoose = require('mongoose');

const highScoreRoutes = require('./routes/highScores')

app.use('/api/highscores', highScoreRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
         console.log('listenin to the mongo db');
    })
    .catch((e)=> console.log(e));
app.listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT, ));
