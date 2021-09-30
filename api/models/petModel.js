var mongoose = require('mongoose');
var petModel = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    animal:{
        type:String,
        required:true,
      
    }, 
    breed:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
            },
    gender:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    
    image:{
        type:String,

    // CreatedTime:{
    //         type:Date,
    //        default:Date.now
    //     },

    }
}, {collection: 'pet'});

module.exports=mongoose.model("pets",petModel)
