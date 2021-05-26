import  AddUser  from '../models/newUser.js'
export const showMihany = (req, res) => {
      AddUser.find()
         .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));

     
}

