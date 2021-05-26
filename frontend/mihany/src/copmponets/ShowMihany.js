import React, { Component } from 'react';
import { Link ,withRouter } from "react-router-dom" ;
import axios from "axios";

const Mihanylist = props => (
  <tr>
    <td>{props.mihany.email}</td>
    <td>{props.mihany.name}</td>
    <td>{props.mihany.occupation}</td>
    <td>{props.mihany.address}</td>
    <td>{props.mihany.cost}</td>
  
  </tr>
);

 


class ShowMihany extends Component {
    // function to call the data when cklicking on button 
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // name: '',
      // occupation: '',
      // address: '',
      // cost: 0
      items: []
    }
  }

                             
  componentDidMount() {
    axios.get("http://localhost:3000/showMihany")
      .then(res => {
        // if (localStorage.address=== this.state.items.address) 
          
       
        this.setState({
          items: res.data
        })
        console.log(res.data)
        //console.log(localStorage.address)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // mihanyList() {
  //   let lists= this.state
     
  //         return < mihanyList list= { lists }/>
       
  //   } 

  render() {
      const lists = this.state.items
        return (
          <div>
            <h2> Mihanys lists</h2>
            <br />
            {lists.map(list => <div>{list.name}
              <br/>{list.cost}</div>)}
            <br />
            
                 
            </div>   
    )
    }
                }
        

export default withRouter(ShowMihany)
