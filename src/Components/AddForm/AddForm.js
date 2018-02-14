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
        fishname: this.refs.fishname.value,
        fishprice: this.refs.fishprice.value,
        fishstatus: this.refs.fishstatus.value,
        fishdescription: this.refs.fishdescription.value,
        fishimage: this.refs.fishimage.value
      }
    }, () => {this.props.addFish(this.state.newfishData) //parent component
    });
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
        <form className="fish-edit" onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" placeholder="Fish Name" ref="fishname" /><br/>
          <input type="text" placeholder="Fish price" ref="fishprice"/><br/>
          <select ref="fishstatus">
            {fishStatusOption}
          </select><br/>
          <textarea type="text" placeholder="Fish Desc" ref="fishdescription" /><br/>
          <input type="text" placeholder="Fish Image" ref="fishimage" /><br/>
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
