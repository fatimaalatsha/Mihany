import React, { Component } from 'react';
import Cards from './Cards';
import Slideshow from './slideShow';
import { MDBContainer, MDBFooter, MDBRow } from "mdbreact";
import { Link ,withRouter } from "react-router-dom" ;



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
              <MDBFooter>
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Mihany - All Rights Reserved to Abo Frank
                    </MDBContainer>
                </MDBFooter>
                  </div>
            </div>   
    )
    }
                }
        


export default Homepage;