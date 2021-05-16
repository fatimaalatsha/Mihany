import express from 'express';
import Mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import unirest from 'unirest'
//importing hrouts
import homepageRoute from './routes/showResults.js'
const app = express()


//app.use
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(unirest)



//using midle ware to conact
app.use('/', homepageRoute )
const PORT = process.env.PORT|| 3000;




// conacting the dtatbase using mongodb atals

// the link for the cluster from the conact option 
const uri = 'mongodb+srv://mihany:123mihany@cluster0.azgcn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
 
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
Mongoose.connect(uri,connectionParams)
    .then(() => 
        app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`, 'Connected to database'))
   )
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


    //
 
    