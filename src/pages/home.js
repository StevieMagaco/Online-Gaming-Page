import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import homeImage from '../images/homepage.png'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home" style={style.page}>
        <button onClick={() => this.props.history.push("/login")} style={style.login}>Log In</button>
      </div>
    );
  }
}

const style = {
  page: {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    height: '100%'
  },
  login: {
    width: '15%',
    height: '50px',
    position: 'absolute',
    bottom:'40%',
    left:'42%',
  }
}
