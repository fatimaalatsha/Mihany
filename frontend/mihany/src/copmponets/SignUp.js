import React, { Component } from 'react';
import axios from 'axios';

//importing auto complite to help getting the adress
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';



  // handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error));
  // };

//////to check the position of a user/////another way
// function showPosition(position) {
//   console.log("Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude);
// }
//creat a class for the sign up component 
export default class Signup extends Component {
    constructor(props) {
        super(props);
            
       // bind functions, you can use this.function without the need to bind it everytime
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.handleChange = this.handleChange.bind(this)
      //this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onChangeOccupation = this.onChangeOccupation.bind(this);
      this.onChangeCost = this.onChangeCost.bind(this);


      
        this.onSubmit = this.onSubmit.bind(this);
      //the keys are the same as the Schema .. see the modle userSchema in user.model.js line 6 or so.
      //this will work as blue prent to our state

        this.state = {
            name:'',
            password:'',
            email:'',
          address: '',
          occupation: '',
          cost : ''
          }

        }
        //onChance function to track the changes and help to set (change) the state .
          onChangeName(e) {
            
            this.setState({
             name : e.target.value 

            })
          }
          onChangePassword(e) {
            
            this.setState({
            password : e.target.value
            })
          }
          onChangeEmail(e) {
            
            this.setState({
                email : e.target.value
            })
          }
 
  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = address => {
    geocodeByAddress(address)
    this.setState({ address })
    
  }

  
  onChangeOccupation(e) {
            
    this.setState({
      occupation: e.target.value
    })
  }
             onChangeCost(e) {
            
            this.setState({
                cost : e.target.value
            })
  }
  
          onSubmit(e) {
             e.preventDefault();

        //where we set the state and send it in the post request
            const user = {
              name: this.state.name,
              password: this.state.password,
              email: this.state.email,
              address: this.state.address,
              occupation: this.state.occupation,
              cost: this.state.cost

            }
           
            console.log(user)
          axios.post("http://localhost:3000/addUser/adduser", user)
            .then(res => {
           window.location='/signIn'
            })  
             
           .catch(err => alert('user name or phone number is used') );
          

            //console.log('user added')   
        }
        
        
          

//where the magic happence
    render(){
        return (
            <div className = "container">
                <h1>
                Sign up now!
                </h1>
                <form onSubmit={this.onSubmit}>
                <label >  Name </label>
                <br></br>
                <br></br>
                <input required='true' type='text'className="form-control"value= {this.setState.username}onChange={this.onChangeName} placeholder=' Name'/>                   
                <br></br>
                <br></br>
                <label > Creat Password </label>
                <br></br>
                <br></br>
                <input required='true'  type="password" name="password" className="form-control"value= {this.setState.password} onChange={this.onChangePassword} placeholder='Creat Password' />
                <br></br>
                <br></br>
                <label > Email </label>
                <br></br>
                <br></br>
                <input required='true' type='text' className="form-control"  value= {this.setState.email} onChange={this.onChangeEmail} placeholder='Email' />
                <br></br>
              <br></br>
            
                <label > Address </label>
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
      </PlacesAutocomplete>
                {/* <input required='true' type='text' className="form-control" value= {this.setState.address} onChange={this.onChangeAddress} placeholder='Address' /> */}
                <br></br>
              <br></br>
                              <label > Occupation </label>

              <br></br>
                <br></br>
              {/* <input required='true' type='text' className="form-control"  value= {this.setState.occupation} onChange={this.onChangeOccupation} placeholder='Occupation' /> */}
              <select required='true' type='text' className="form-control"  value= {this.setState.occupation} onChange={this.onChangeOccupation} placeholder='Occupation'               ref = "userInput"
>
                <option value = "Plumber">Plumber</option>
                <option value = "Barber">Barber</option>
                <option value = "Painter">Painter</option>
                <option value = "Electrician">Electrician</option>
                <option value = "Nurse">Nurse</option>
              </select>
                <br></br>
              <br></br>
                              <label > Cost </label>

                <br></br>
                <br></br>
                <input required='true'  className="form-control"  value= {this.setState.cost} onChange={this.onChangeCost} placeholder='Cost' />
                <br></br>
                <br></br>
                <input type='submit' value='Creat Account'/>
            </form>
            <br></br>
            <br></br>
            <b>If you already have an account<a href='/login'> Log In </a></b>
            <br></br>
            <br></br>
            
            </div>
         
        )
    }
}


