//import { browserHistory, Route , withRouter} from 'react-router-dom';
//import ContainerImage from '../images/bitcoin1.jpg';
import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withRouter}  from 'react-router-dom';
import "../styles/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.pushToNextPage = this.pushToNextPage.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  pushToNextPage(){
    //console.log('Button Pressed');
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            onClick={this.pushToNextPage}
            disabled={!this.validateForm()}
            type="submit"
          >
            <span>Login</span>
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);


/*const style = {
  fromImage: {
    backgroundImage: `url(${ContainerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    height: '100%'
  }
}*/