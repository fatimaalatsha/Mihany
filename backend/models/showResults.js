import mongoose from 'mongoose'

const addusers = mongoose.Schema({
    
    name :{
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    email :{
        type: String,
        required: true,
        unique:true
    },
    address:{
        type: String,
        required: true,
    },
    occupation:{
        type: String,
        required: true
    },
    cost: {
        
        type: Number,
        required: true
    }
});


const UserResult = mongoose.model('UserResult', addusers)

export default UserResult;