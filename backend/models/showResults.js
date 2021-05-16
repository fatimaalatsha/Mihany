import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    
    email :{
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    name :{
        type: String,
        required: true,
        unique:true,
        minlength:3,
        trim: true
    },
    occupation:{
        type: String,
        required: true,
        unique:true,
        minlength:3,
        trim: true
    },
    address:{
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    cost: {
        
        type: Number,
         unique:true
    }
});


const UserResult = mongoose.model('UserResult', userSchema)

export default UserResult;