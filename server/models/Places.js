const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    placeName: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
        
    },
    people:{
        type:Number,
        required:true,
    },
    Rating: {
        type: Number,
        required: true,
    },
    Address:{
        type:String,
        required:true,
    },
    Time:{
        type:String,
    },
    Photo:{
        type:String,
        required:true,
    },
    Type:{
        type: String,
        default:"Restaurant",
    }
});

const Places = mongoose.model('Places', userSchema);

module.exports = Places;