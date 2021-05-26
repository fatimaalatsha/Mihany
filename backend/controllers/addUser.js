import AddUser from '../models/newUser.js'
import bcrypt from 'bcrypt';

export const addUser = async (req , res) => {
  //to hash the password when it is enterd 
  const salt = await bcrypt.genSalt(10)
  const hashedPassword =  await bcrypt.hash(req.body.password, salt)
  const  name = req.body.name
  const email = req.body.email
  const address = req.body.address
  const occupation = req.body.occupation
  const   cost = req.body.cost
    const newUser = new AddUser({
        
        name : name,

         password : hashedPassword,

          email : email,
        
        address : address,

        occupation : occupation,

        cost :cost
    });
   try{
      await newUser.save()
      res.send(newUser.name)
   }
   catch (err) {
       res.status(403).send(err)
       console.log(newUser)
   }
  
 
    }



