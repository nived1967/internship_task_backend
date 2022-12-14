require('dotenv').config()
const express=require('express');
const app=express();
const mongoose=require('mongoose')
const cors = require('cors');

app.use(cors());
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser:true })
const db=mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log("Connected to Database"))

app.use(express.json())

const scoreboardRouter=require('../routes/scoreboard')
app.use('/scoreboard',scoreboardRouter)

var port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,()=>console.log('Server Started'))