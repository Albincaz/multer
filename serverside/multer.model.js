const mongoose = require("mongoose");
const userSchema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    phone:{type:Number},
    file:{type:Array},
})

module.exports=mongoose.model.Users||mongoose.model("User",userSchema)