import jwt from 'jsonwebtoken';
import AddNewUser from '../models/newUser.js';
import bcrypt from 'bcrypt';

export const User = async (req, res) => {
    //checking ig threr is an account with this email
console.log (req.body)
    const user = await AddNewUser.findOne({ email: req.body.email })
    if (!user)
    { return res.status(401).send("there is no account with this Email,please check your Email or go to Sign Up?") };
const validpassword = await bcrypt.compare(req.body.password, user.password)
    if (!validpassword) return res.status(402).send('Password not correct');

     const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET );
    res.header('addUser-token',token).send(token);
     //console.log(res.header)
    
        }