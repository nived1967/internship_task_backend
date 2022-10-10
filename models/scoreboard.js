const mongoose=require('mongoose')

const scoreboardSchema=new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },

    "pno":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "hobbies":{
        type:String,
        required:true
    },
});

module.exports=mongoose.model('Scoreboard',scoreboardSchema)