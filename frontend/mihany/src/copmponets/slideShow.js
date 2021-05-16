import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default class Slideshow extends Component {
    render() {
        return(
          <div>                
          <Carousel className = "container" >
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src={process.env.PUBLIC_URL + "./adam-winger-fI-TKWjKYls-unsplash.jpg"}
              alt="First slide"
              width="50%" height="500px"
              />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src={process.env.PUBLIC_URL + "./adam-winger-WDmvpGs2060-unsplash.jpg"}
              alt="Third slide"
              width="50%" height="500px"
              />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src={process.env.PUBLIC_URL + "./henry-co-3coKbdfnAFg-unsplash.jpg"}
              alt="Third slide"
              width="50%" height="500px"
              />           
          </Carousel.Item>
        </Carousel>
        </div>
  //         <dive>
  //         <Carousel>
  // <Carousel.Item>
  //   <img
  //     className="d-block w-100"
  //     src="./adam-winger-WDmvpGs2060-unsplash.jpg"
  //                 alt="First slide"
  //                 width="50%" height="500px"
  //               />
  //               <br></br>
  //   <Carousel.Caption>
  //     <h3>First slide label</h3>
  //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //   </Carousel.Caption>
  // </Carousel.Item>
  // <Carousel.Item>
  //   <img
  //     className="d-block w-100"
  //     src="./adam-winger-WDmvpGs2060-unsplash.jpg"
  //                 alt="Second slide"
  //                 width="50%" height="500px"
  //   />

  //   <Carousel.Caption>
  //     <h3>Second slide label</h3>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //   </Carousel.Caption>
  // </Carousel.Item>
  // <Carousel.Item>
  //   <img
  //     className="d-block w-100"
  //     src="./adam-winger-WDmvpGs2060-unsplash.jpg"
  //                 alt="Third slide"
  //                 width="50%" height="500px"
  //   />

  //   <Carousel.Caption>
  //     <h3>Third slide label</h3>
  //     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  //   </Carousel.Caption>
  // </Carousel.Item>
  //           </Carousel>
  //           </dive>
        )
    }
}