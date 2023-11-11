const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type : String,
        requires:true
    },
    password:{
        type : String,
        requires:true
    },
    favorites:[{
        type:JSON
    }]
});

module.exports = mongoose.model("User" , userSchema);