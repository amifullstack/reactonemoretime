import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

// Components
import Header from '../Shared/Header/Header'
import StorePicker from '../StrorePicker/StorePicker';


class Home extends Component {
  constructor(props) {
    super(props);
  }
sayHi() {
  alert("Clicked")
}
  render() {
    return(
      <div>        
        <p>Welcome to Home Page.</p>        
        <Link to="/account/profile/wesbos">profile</Link>        
        <Link to='/storepicker'>StorePicker</Link>
        <Button bsStyle="primary" bsSize="large" onClick={() => this.sayHi()}>Click</Button>
        <button>Test</button>
      </div>
    )
  }
}
export default Home;