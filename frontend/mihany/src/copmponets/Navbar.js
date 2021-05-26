import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
<nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
      <a class="navbar-brand" href="/Homepage"> Mihany </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
            <br />
              <p>Already have an account?</p>

            <li class="nav-item">
          <a class="nav-link" href="/SignIn" tabindex="-1" aria-disabled="true">Sign In</a>
            </li>
                          <p>you do not have an account?</p>

        <li class="nav-item">
          <a class="nav-link" href="/adduser" tabindex="-1" aria-disabled="true"> Sign UP  Now</a>
            </li>
            <li class="nav-item">
          <a class="nav-link" href="/profile" tabindex="-1" aria-disabled="true"> profile </a>
        </li>
      </ul>
   
  </div>
</nav>
    );
  }
}