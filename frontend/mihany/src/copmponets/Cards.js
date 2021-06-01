import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from "axios";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

//*************************************************//
// function showPosition(position) {
//   console.log("Latitude: " + position.coords.latitude +
//       "<br>Longitude: " + position.coords.longitude);
    
// }

///this is for trying to covert the numbers to addresss that human can read
// function showPosition(position) {
//   console.log("Latitude: " + position.coords.latitude +
//       "<br>Longitude: " + position.coords.longitude);
//       var latlng = new google.maps.LatLng(lat, lng);
//     // This is making the Geocode request
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//         if (status !== google.maps.GeocoderStatus.OK) {
//             alert(status);
//         }
//         // This is checking to see if the Geoeode Status is OK before proceeding
//         if (status == google.maps.GeocoderStatus.OK) {
//             console.log(results);
//             var address = (results[0].formatted_address);
//         }
//     });
// }

// function showPosition(position, geocoder) {
    
//   const addr = position.coords.latitude +
//         ',' + position.coords.longitude;
//     const addrStr = addr.split(",", 2);
//   const latlng = {
//     lat: parseFloat(addrStr[0]),
//     lng: parseFloat(addrStr[1]),
//     };
//     console.log(latlng)

//     geocoder.geocode({ location: latlng }, (results, status) => {
      
//         const marker = {
//           position: latlng
//         };
//           localStorage.setItem("address", results[0].formatted_address);

//         // infowindow.setContent(results[0].formatted_address);
//         // infowindow.open(map, marker);
      
//   });
// }
//*************************************************//
  

export default class Cards extends Component {
   
 constructor(props) {
        super(props);
            
       // bind functions, you can use this.function without the need to bind it everytime
      this.onChangeOccupation = this.onChangeOccupation.bind(this);
      this.handleChange = this.handleChange.bind(this)
      this.handleClick=this.handleClick.bind(this)
      //the keys are the same as the Schema .. see the modle userSchema in user.model.js line 6 or so.
      //this will work as blue prent to our state

        this.state = {
           
            occupation: '',
            address: ''
          
          }

        }
        //onChance function to track the changes and help to set (change) the state .
          onChangeOccupation(e) {
            
            this.setState({
             occupation : e.target.value 

            })
          }
          handleChange = address => {
    this.setState({ address })
  }

  handleSelect = address => {
    geocodeByAddress(address)
    this.setState({ address })
    
    }
  
    //*************************************************//
   handleClick() {
       const userData = {
           address: this.state.address,
          occupation: this.state.occupation
      }
     localStorage.setItem('address', userData.address);
     localStorage.setItem('occupation',  userData.occupation);

     
    // navigator.geolocation.getCurrentPosition(showPosition);
           //   // axios.get("http://localhost:3000/showMihany/"+ userData.address )
      //   //     .then(res => {
      //   // this.setState({
      //   //    items: res.data })
      //  // console.log(this.state.items)
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
       window.location = '/ShowMihany';
      
   
    };
//*************************************************//
                       
    render() {
        return(
            <div className = "container">
<label >  I am looking for ... </label>
                <br></br>
                <br></br>
<select required='true' type='text' className="form-control"  value= {this.setState.occupation} onChange={this.onChangeOccupation} placeholder='Occupation..' >
                <option value = "Plumber">Plumber</option>
                <option value = "Barber">Barber</option>
                <option value = "Painter">Painter</option>
                <option value = "Electrician">Electrician</option>
                <option value = "Nurse">Nurse</option>
              </select>                <br></br>
                <br></br>
                <label >  i live in ... </label>
                <br></br>
                <br></br>
<PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'form-control',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>                <br></br>
                <br></br>
                    <button className = "btn btn-light" 
                                onClick= {this.handleClick}
                            size="lg">Find me Mihany</button>

                <CardDeck className = "text-center d-flex justify-content-between">
                                
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



//  <label>Select Category  </label>
//                   <select
//                     ref = "userInput"
//                     required="true"
//                     className = "form-control"
//                     value = {this.state.category}
//                     onChange = {this.onChangeCategory}
//                     >
//                     <option value = "Women">Women</option>
//                     <option value = "Men">Men</option>
//                     <option value = "Kids">Kids</option>
//                   </select>