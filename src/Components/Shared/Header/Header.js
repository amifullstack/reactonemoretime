import React, { Component } from 'react';

// css
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header className="header-top">
        <h3>Header Component</h3>
        <h4>{this.props.tagline}:</h4>
      </header>
    )
  }
}

export default Header;
