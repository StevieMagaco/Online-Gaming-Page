import React, { Component } from "react";
import Header from '../components/header';
import GameOne from '../components/games/cryptogameone';
import GameTwo from '../components/games/cryptogametwo';
/*import { getGameNum, setGameNum } from '../states/game';*/

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  componentDidMount(){
    console.log('PAGE URL:', this.props.location.pathname);
  }

  renderGame(){
    if( this.state.page == 0)
        return( <GameOne/> )
    else
        return( <GameTwo/> )
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='dashboardContainer'>
          <div className='siderbar'>
          <button onClick={() => this.setState({page: 0 }, () => {console.log(this.state.page);})}>Poker</button>
          <button onClick={() => this.setState({page: 1 }, () => {console.log(this.state.page);})}>Slots</button>
          </div>
          <div className='content'>
          { this.renderGame() }
          </div>
        </div>
      </div>
    )
  }
}
