import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from "axios";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";


function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude);
}
export default class Cards extends Component {
   

  handleClick ()  {
      navigator.geolocation.getCurrentPosition(showPosition);
                     
            // window.location = '/ShowMihany';
              
    };

                       
    render() {
        return(
            <div className = "container">
                <CardDeck className = "text-center d-flex justify-content-between">
                <Card>
                    <Card.Body>
                    <Card.Text>
Mihany                    </Card.Text>                
                    <button className = "btn btn-light" 
                                onClick= {this.handleClick}
                            size="lg">Find me Mihany</button>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "./Contributors.png"} />
                    <Card.Body>
                    <Card.Text>
                    Address
                    <br />
                    Thunder Bay, ON, Canada 
                    <br /> <br />
                    Phone 
                    <br /> 
                    <a href="+111 1 111 0969">Call us at +111 111 0969</a>
                    <br />
                    
                    E-mail 
                    <br />
                    <a href = "Abufranck@gmail.com">Abufranck@gmail.com</a>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                </CardDeck>
            </div>   
        )
    }
}

