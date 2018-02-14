import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';

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
  }

  // sayHi(e) {
  //   alert("HI" + this.refs.name.value)

  //   e.preventDefault();
  // }

  render() {
    return(      
      <div className="storepicker">
            
            <form onSubmit={(e) => this.sayHi(e)}>
              <label>Enter Name</label>
              <input 
                type="text" 
                placeholder="Enter text"
                ref="name"
                defaultValue={getFunName()}
                
              />
              <input type="submit" value="submit" />
            </form>
     
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
export default StorePicker;