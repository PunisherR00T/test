const mongoose = require('mongoose')

const Carschema = new mongoose.Schema ({
    price : {type : String, required:true},
    description : {type:String,required:true},
    brand : {type:String,required:true},
    model : {type:String,required:true},
    energie : {type:String,required:true},
    transmission : {type:String,required:true},
    kilometrage: {type:Number,required:true},
    année: {type:String,required:true},
    boite: {type:String,required:true},
    puissance : {type:String,required:true},
    images: {type:String,required:true}
})


module.exports = mongoose.model('Voiture',Carschema)