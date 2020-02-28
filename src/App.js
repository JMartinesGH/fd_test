import React from 'react';
import './App.css';
import { fetchPlayers } from './utils/api'
import Player from './components/Player'

class App extends React.Component {
  state = {
      loading: true,
      players: []
  }
  componentDidMount() {
    fetchPlayers()
      .then((players)=>{
        this.setState({
          players: players,
          loading: false
        })
      })
  }
  render(){
    let players = this.state.players
    let playerOne = players[Math.floor(Math.random()*players.length)]
    let playerTwo = players[Math.floor(Math.random()*players.length)]

    if (this.state.loading === true) {
      return <h1>loading</h1>
    }
    return (
      <div className="App">
        <ul>
            <li><Player player={playerOne}/></li>
            <li><Player player={playerTwo}/></li>
       </ul>
      </div>
    );
  }
}

export default App;
