import AddNewUser from '../models/newUser.js'
import bcrypt from 'bcrypt';

export const addUser = async (req , res) => {
  //to hash the password when it is enterd 
  const salt = await bcrypt.genSalt(10)
   const hashedPassword =  await bcrypt.hash(req.body.password, salt)

    const newUser = new AddNewUser({
        
        name : req.body.name,

         password :  hashedPassword,

          email : req.body.email,
        
        address : req.body.address,

        occupation : req.body.occupation,

        cost : req.body.cost
    });
   try{
   const saveUser= await newUser.save()
      res.send({saveUser:newUser._id})
   }
   catch (err) {
       res.status(403).send(err)
       console.log(newUser)
   }
  
 
    }



