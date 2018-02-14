import React, { Component } from 'react';
import fid from 'uuid'

// Components
import Header from '../Shared/Header/Header'

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newfishData: {}
    }
  }

  static defaultProps = {
    fishStatus: ['available', 'unavailable']
  }

  // handleSubmit
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      newfishData: {
        id: fid.v4(),
        fishname: this.fishname.value,
        fishprice: this.fishprice.value,
        fishstatus: this.fishstatus.value,
        fishdescription: this.fishdescription.value,
        fishimage: this.fishimage.value
      }
    }, () => {this.props.addFish(this.state.newfishData) //parent component
    })
    this.addFishForm.reset();
    
  }



  // add Form
  _AddFishForm() {
    let fishStatusOption = this.props.fishStatus.map((option) => {
      return(
        <option>{option}</option>
      )
    })

    return(
      <div>
        <form className="fish-edit" onSubmit={(e) => this.handleSubmit(e)} 
          ref={(el) => this.addFishForm = el} >
          <input type="text" placeholder="Fish Name" ref={(input) =>this.fishname=input }/><br/>
          <input type="text" placeholder="Fish price" ref={(input) =>this.fishprice=input}/><br/>
          <select ref={(input) =>this.fishstatus=input}>
            {fishStatusOption}
          </select><br/>
          <textarea type="text" placeholder="Fish Desc" ref={(input) =>this.fishdescription=input} /><br/>
          <input type="text" placeholder="Fish Image" ref={(input) =>this.fishimage=input} /><br/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }

  render() {    

    return(      
      <div>
      {this._AddFishForm()}      
      </div>
    )
  }
}
export default AddForm;
