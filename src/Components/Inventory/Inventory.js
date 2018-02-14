import React, { Component } from 'react';
import fid from 'uuid';

// css
import './Inventory.css'

// Components
import AddForm from '../AddForm/AddForm';
import Fish from '../Fish/Fish';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fish: []
    }
  }

  componentDidMount() {
    this.setState({
      fish:[
        {
          id: fid.v4(),
          fishname: "f1",
          fidhprice: 12,
          fishstatus: "available",
          fishdescription: "freshfresh",
          fishmage: "http://",
        },
        {
          id: fid.v4(),
          fishname: "f2",
          fishprice: 1,
          fishstatus: "available",
          fishdescription: "freshfresh",
          fishimage: "http://fdfdf",
        }
      ]
    })
  }

  handleAddFish(fish) {
    // Get current state
    let fishItems = this.state.fish;

    // push new current state to current
    fishItems.push(fish);
    
    // set it
    this.setState({
      fish: fishItems
    })   

  }

  

  render() {
    console.log(this.state.fish)
    return(
      <div className="inventory">
        <h3>Inventory Component</h3>        
        <Fish fishItems={this.state.fish}/>
        <AddForm addFish={(fish) => this.handleAddFish(fish)}/>
      </div>
    )
  }
}

export default Inventory;
