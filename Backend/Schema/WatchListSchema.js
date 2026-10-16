const {Schema} =require("mongoose");

const WatchListSchema=new Schema({
    name :String,
    price:Number,
    percentage :String,
    isDown :Boolean,

});

module.exports ={WatchListSchema};