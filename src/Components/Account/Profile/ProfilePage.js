import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return(
      <div>
        <p>URL vriable: {match.params.id}</p> <br />
        <Link to='/'>Home</Link><br />

      </div>
    
    )
  }
}
export default ProfilePage;