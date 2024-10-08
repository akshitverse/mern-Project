const mongoose  = require('mongoose')
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
        }
})

module.exports = mongoose.model('signup',UserSchema)