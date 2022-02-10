import React, { Component } from 'react';
import axios from 'axios';




export default class Signin extends Component {
    constructor(props) {
        super(props);  
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password:''
                     }
    }

    onChangeEmail(e) {
            
        this.setState({
         email : e.target.value 

        })
      }
      onChangePassword(e) {
        
        this.setState({
        password : e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
    //where we set the state and send it in the post request
        const user = {
          email: this.state.email,
          password: this.state.password
        } 
        
        axios.post("http://localhost:3000/signIn/signin", user)
        .then(response =>{
       console.log (response)
      window.location='/showMihany'

        })
        .catch(err =>alert("Email or password is incorrect") );
          
        
        //  .then( (response) => {
            
        //     let token = response.data.access;
        //     localStorage.setItem("SavedToken", 'Bearer ' + token);
        //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        //     (this.$router.push({name:'HomePage'}));
            
        //     })
         
    }
    render(){
        return (
               
               <div className = "container">
                <form onSubmit={this.onSubmit}>
                <label > Email </label>
                <br></br>
                <br></br>
                <input required type='text'className="form-control"value= {this.setState.email}onChange={this.onChangeEmail} placeholder='Enter Your Email'/>                   
                <br></br>
                <br></br>
                <label > Password </label>
                <br></br>
                <br></br>
                <input required  type="password" name="password" className="form-control"value= {this.setState.password} onChange={this.onChangePassword} placeholder='Enter Your Password' />
                <br></br>
                <br></br>
                <input type='submit' value='Log In'/>
                <br></br>
                <br></br>
                <p>Don't have an account ? <a href='/adduser'> Sign Up</a></p>
                </form>
             </div>
            )  
    }
}
