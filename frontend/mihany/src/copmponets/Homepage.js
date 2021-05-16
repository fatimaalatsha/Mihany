import React, { Component } from 'react';
import Slideshow from './slideShow';
// import { MDBContainer, MDBFooter, MDBRow } from "mdbreact";
import { Link ,withRouter } from "react-router-dom" ;
import Cards from './Cards';



class Homepage extends Component {
    // function to call the data when cklicking on button 


    render(){
        return (
          <div className="containe bg-dark justify-content-between">
                <br />
                <Slideshow />
                <br />
                <Cards className = "d-flex justify-content-around"/>
                <div className="footer-copyright text-center py-3">
                  </div>
            </div>   
    )
    }
                }
        


export default Homepage;