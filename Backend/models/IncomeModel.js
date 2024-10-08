const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        trim:true, 
        maxLength:50
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:String,
        required:true,
        trim:true,
        
    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    project:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxLength:20
    },

},{timestamps:true})

module.exports = mongoose.model('Income',IncomeSchema)