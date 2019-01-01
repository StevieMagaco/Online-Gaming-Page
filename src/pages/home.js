//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { Component } from "react";
import Header from '../components/header';
import Modal from 'react-modal';
import Login from '../components/login';
import homeImage from '../images/bitcoin2.jpg';

export default class Home extends Component {
  componentWillMount() {
    Modal.setAppElement('body');
  }
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="Home" style={style.page}>
        <Header/>
        <div className="home-center-content">
        <h1>Win with Crypto!</h1>
        <button onClick={this.openModal} style={style.login}>Log In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="Example Modal" >
          <Login/>
        </Modal>
        </div>
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
    height: '50px',/*
    position: 'absolute',
    bottom:'40%',
    left:'42%',*/
  }
};


const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'none',
    border                : 'none'
  }
};
