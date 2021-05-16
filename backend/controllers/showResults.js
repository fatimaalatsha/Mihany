import  UserResult  from '../models/showResults.js'
export const showMihany = (req, res) => {
  
   UserResult.find() 
  .then(items => res.json(items))
  .catch(err => res.status(400).json('Error: ' + err));
}