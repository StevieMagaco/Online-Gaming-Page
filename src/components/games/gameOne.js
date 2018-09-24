import React, { Component } from 'react';
import Iframe from 'react-iframe';

class GameOne extends Component {
    render() {
        return (
                <div>
                <Iframe url="https://cryptocurgamesone.herokuapp.com/"
                  width="80%"
                  height="80%"
                  id="myId"
                  className="gameframe"
                  allowFullScreen/>
                </div>
                )
            }
}
export default GameOne
