import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

// css
import './StorePicker.css';

// Components
import Header from '../Shared/Header/Header'
import Order from '../Order/Order';
import Inventory from '../Inventory/Inventory';

// 
import {getFunName} from '../Shared/Helper'

class StorePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  gotoStore(e) {
    e.preventDefault();
    // // alert("HI" + this.refs.name.value)
    // const storeId = this.refs.name.value;
    // // // console.log(storeId);
    // // this.setState({
    // //   redirect: true,
    // // }) 
    // const { router } = this.context;
    // router.transtionTo(`/store/${storeId}`);
  }

  render() {
    if(this.state.redirect) {
      return(
        <Redirect push to="/"/>
      )
    }
    return(      
      <div className="storepicker">
            
            {/* <form onSubmit={(e) => this.gotoStore(e)}>
              <label>Enter Name</label>
              <input 
                type="text" 
                placeholder="Enter text"
                ref="name" 
                defaultValue={getFunName()}
                
              />
              <button type="submit" value="submit">Visit Store -></button>
            </form> */}
     
      <div className="storepicker">
        <div className="menu">
          <Header tagline="Sea Food" />
        </div>
        <Order />
        <Inventory />

      </div>
      </div>
    )
  }
}

// StorePicker.contextTypes = {
//   router: React.PropTypes.object
// }
   

export default StorePicker;