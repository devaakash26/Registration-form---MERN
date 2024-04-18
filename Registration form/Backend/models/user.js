const mongoose = require('mongoose');
const bcrypt= require("bcrypt")
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
});

//Pre Function for bcrypt the password
userSchema.pre('save', async function(next){
    const user=this;
    if(!user.isModified('password'))
    {
        next();
    }
    try {
        const Salt= await  bcrypt.genSalt(10);
        const Hash =  await bcrypt.hash(user.password,Salt);
        user.password=Hash;
    } catch (error) {
        next(error);
    }
})

//Export the model
module.exports = mongoose.model('User', userSchema);