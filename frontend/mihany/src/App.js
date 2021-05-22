import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';



import Homepage from './copmponets/Homepage';
import Navbar from './copmponets/Navbar';
import ShowMihany from './copmponets/ShowMihany'
import Slideshow from './copmponets/slideShow'
import Signup from './copmponets/SignUp' 
import Signin from './copmponets/SignIn'
import Profile from './copmponets/Profile'
import ProtectedRoute from './copmponets/ProtectedRoute'
 function App() {
  
  return (
    <Router className = "container">
      <div>
        <Navbar />
        <br />
        <Route path = "/homepage" component = { Homepage } />
        <Route path="/ShowMihany" component={
          ShowMihany} />
       <Route path = "/addUser"  component= { Signup } />
        <Route path="/signin" component={Signin} />
        <ProtectedRoute path="/profile" component={Profile} isAuth={localStorage.length > 0}/>
        <br />
       </div>
    </Router>
  );
}

export default App;


// 