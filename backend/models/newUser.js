import mongoose from 'mongoose'

const AddNewUser = mongoose.Schema({
    
    name :{
        type: String,
        unique:true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email :{
        type: String,
        required: true,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    occupation:{
        type: String,
        required: true,
        trim: true
    },
    cost: {
        
        type: Number,
        required: true,

    }
});


const AddUser = mongoose.model('AddUser', AddNewUser)

export default AddUser;