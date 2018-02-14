import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home/Home'
import ProfilePage from './Components/Account/Profile/ProfilePage';
import StorePicker from './Components/StrorePicker/StorePicker';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <div>
          <h1>Minimal React Boilerplate!</h1>

          <Switch>
          <Route exact path='/' component={Home} />
          <Route path ='/account/profile/:id' component={ProfilePage} />
          <Route path='/storepicker' component={StorePicker} />          
          
          {/* Add all route above this line */}
          <Route component = {NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const NotFound = () => {
  return(
    <div>
      <h1>Hold on..404 Here, Page you looking is NOT FOUND </h1>
    </div>
  )
}
export default App;