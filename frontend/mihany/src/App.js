import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

import Homepage from './copmponets/Homepage';
import Navbar from './copmponets/Navbar';
import ShowMihany from './copmponets/ShowMihany'
import './App.css';

 function App() {
  
  return (
    <Router className = "container">
      <div>
        <Navbar />
        <br />
        <Route path = "/homepage" component = { Homepage } />
        <Route path="/ShowMihany" component={
          ShowMihany}/>
        <br />
      
       </div>
    </Router>
  );
}

export default App;