import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { browserHistory, Route , withRouter} from 'react-router-dom';
import homeImage from '../images/homepage.png'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  logout(){
    this.props.history.push("/");
  }

  render() {
    return (
      <div className='dashboardHeader'>
        <p>Welcome</p>
        <p>Winnings: <span>$1000</span></p>
        <button onClick={this.logout.bind(this)}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(Header);
