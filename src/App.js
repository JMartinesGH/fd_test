import React from 'react';
import './App.css';
import { fetchPlayers, battle } from './utils/api'
import Player from './components/Player'

class App extends React.Component {
  state = {
    loading: true,
    players: [],
    playerOne: null,
    playerTwo: null,
    selected: null,
    count: 0,
    status: false,
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
      playerTwo: this.state.players[Math.floor(Math.random() * this.state.players.length)],
      selected: null,
      status: false
    })
  }
  restart = () => {
    this.setState({
      playerOne: this.state.players[Math.floor(Math.random() * this.state.players.length)],
      playerTwo: this.state.players[Math.floor(Math.random() * this.state.players.length)],
      selected: null,
      status: false,
      count: 0
    })
  }
  handleClick = (playerInput, playerNumber) => {
    // console.log('click')
    console.log(playerNumber, ' selected')
    // battle
    let results = battle(this.state.playerOne, this.state.playerTwo)
    // show
    this.setState({ selected: playerInput })
    // set winner
    if (results[0] === playerInput) {
      console.log('winner')
      // show as winner
      // increment
      this.setState({
        status: true,
        count: this.state.count + 1
      })
    } else {
      console.log('loser')
      this.setState({
        status: false
      })
    }
  }
  render() {
    let { playerOne, playerTwo, count } = this.state

    if (this.state.loading === true) {
      return <h1 className='loading'>loading</h1>
    }
    return (
      <div className="App">
        {this.state.count < 10 ? (
          <React.Fragment>
            <h1>Select the better player</h1>
            <h3>Correct Count: {count}</h3>
            <ul>
              <li><Player player={playerOne} onSelection={this.handleClick} playerNumber={'playerOne'} selectClass={this.state.selected === playerOne ? 'active' : null} /></li>
              <li><Player player={playerTwo} onSelection={this.handleClick} playerNumber={'playerTwo'} selectClass={this.state.selected === playerTwo ? 'active' : null} /></li>
            </ul>
            {this.state.status ?
              (<h1 className='winner'>Winner</h1>) :
              (<h1 className='loser'>Loser</h1>)}
            <button onClick={this.reset}>Next Players</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1>Congrats you got 10 correct</h1>
            <button onClick={this.restart}>Restart</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
