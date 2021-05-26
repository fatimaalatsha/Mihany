import mongoose from 'mongoose'

const AddNewUser = mongoose.Schema({
    
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
        unique:true,
    },
    address:{
        type: String,
        required: true,
    },
    occupation:{
        type: String,
        required: true,
    },
    cost: {
        
        type: Number,
        required: true

    }
});


const AddUser = mongoose.model('AddUser', AddNewUser)

export default AddUser;