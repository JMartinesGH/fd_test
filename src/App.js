import React from 'react';
import './App.css';
import { fetchPlayers } from './utils/api'
import Player from './components/Player'

class App extends React.Component {
  state = {
    loading: true,
    players: [],
    playerOne: null,
    playerTwo: null,
    count: 0
  }
  componentDidMount() {
    fetchPlayers()
      .then((players) => {
        this.setState({
          players: players,
          loading: false,
          playerOne: players[Math.floor(Math.random() * players.length)],
          playerTwo: players[Math.floor(Math.random() * players.length)]
        })
      })
  }
  reset = () => {
    this.setState({
      playerOne: this.state.players[Math.floor(Math.random() * this.state.players.length)],
      playerTwo: this.state.players[Math.floor(Math.random() * this.state.players.length)]
    })
  }
  handleClick = (playerInput) => {
    // console.log('click')
    if(playerInput.fppg == this.state.playerOne.fppg){
      console.log('playerOne selected')
      if(playerInput.fppg > this.state.playerTwo.fppg){
        this.setState({
          count: this.state.count+1,
          playerOne: this.state.players[Math.floor(Math.random() * this.state.players.length)],
          playerTwo: this.state.players[Math.floor(Math.random() * this.state.players.length)]
        })
      }else{
        this.setState({
          playerOne: this.state.players[Math.floor(Math.random() * this.state.players.length)],
          playerTwo: this.state.players[Math.floor(Math.random() * this.state.players.length)]
        })
      }
    }else{
      console.log('playerTwo selected')
      if(playerInput.fppg > this.state.playerOne.fppg){
        this.setState({
          count: this.state.count+1,
          playerOne: this.state.players[Math.floor(Math.random() * this.state.players.length)],
          playerTwo: this.state.players[Math.floor(Math.random() * this.state.players.length)]
        })
      }else{
        this.setState({
          playerOne: this.state.players[Math.floor(Math.random() * this.state.players.length)],
          playerTwo: this.state.players[Math.floor(Math.random() * this.state.players.length)]
        })
      }
    }

    // battle
    
  }
  render() {
    let { playerOne, playerTwo, count } = this.state

    if (this.state.loading === true) {
      return <h1 className='loading'>loading</h1>
    }
    return (
      <div className="App">
        <h1>Select the better player</h1>
        <h3>Correct Count: {count}</h3>
        <ul>
          <li><Player player={playerOne} onSelection={this.handleClick} playerNumber={'playerOne'}/></li>
          <li><Player player={playerTwo} onSelection={this.handleClick} playerNumber={'playerTwo'}/></li>
        </ul>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
