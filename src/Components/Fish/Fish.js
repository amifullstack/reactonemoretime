import React, { Component } from 'react';

class Fish extends Component {
  constructor(props) {
    super(props);
  }

  _renderFisItems() {
    return Object.entries(this.props.fishItems).map(([key, value]) => {
      return(
        <div key={key}>
          <ul>
            <li>ID: {value.id}</li>
            <li>Fish Name: {value.fishname}</li>
            <li>Price: {value.fishprice}</li>
            <li>Description: {value.fishdescription}</li>
            <li>Image: {value.fishimage}</li>
          </ul>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        {this._renderFisItems()}
      </div>
    )
  }
}
export default Fish;