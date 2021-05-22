import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default class Slideshow extends Component {
    render() {
        return (
            <div>
                <div >
            <Carousel className='container' activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-170 img-responsive"
      src="./adam-winger-fI-TKWjKYls-unsplash.jpg"
                        width="50%" height="500px"
    />
   
                    
  </Carousel.Item>
  {/* <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 img-responsive"
      src="./adam-winger-WDmvpGs2060-unsplash.jpg"
                        alt="Second slide"
                        width="50%" height="500px"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 img-responsive"
      src="./henry-co-3coKbdfnAFg-unsplash.jpg"
                        alt="Third slide"
                        width="50%" height="500px"
    />
  
  </Carousel.Item> */}
                </Carousel>
                </div>
                 </div>
                    
        //   <Carousel className = "container" >
        //   <Carousel.Item interval={2000}>
        //       <img
        //       className="d-block w-100 img-responsive"
        //       src={process.env.PUBLIC_URL + "./adam-winger-fI-TKWjKYls-unsplash.jpg"}
        //       alt="First slide"
        //       width="50%" height="500px"
        //       />
        //   </Carousel.Item>
        //   <Carousel.Item interval={2000}>
        //       <img
        //       className="d-block w-100 img-responsive"
        //       src={process.env.PUBLIC_URL + "./adam-winger-WDmvpGs2060-unsplash.jpg"}
        //       alt="Third slide"
        //       width="50%" height="500px"
        //       />
        //   </Carousel.Item>
        //   <Carousel.Item interval={2000}>
        //       <img
        //       className="d-block w-100 img-responsive"
        //       src={process.env.PUBLIC_URL + "./henry-co-3coKbdfnAFg-unsplash.jpg"}
        //       alt="Third slide"
        //       width="50%" height="500px"
        //       />           
        //   </Carousel.Item>
        // </Carousel>
      
  
        )
    }
}