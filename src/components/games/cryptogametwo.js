import React, { Component } from 'react';
import Iframe from 'react-iframe';

class GameTwo extends Component {
    render() {
        return (
          <div className="gamecontainer">
          <Iframe url="https://cryptocurgamestwo.herokuapp.com/"
          width="80%"
          height="80%"
          id="myId"
          className="gameframe"
          allowFullScreen/>
          </div>
                )
            }
}
export default GameTwo
