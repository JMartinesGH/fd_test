import React from 'react';
import './App.css';
import { fetchPlayers } from './utils/api'
import Player from './components/Player'

class App extends React.Component {
  state = {
      players: []
  }
  componentDidMount() {
    fetchPlayers()
      .then((players)=>{
        this.setState({
          players: players
        })
      })
  }
  render(){
    // let players = this.state.players
    return (
      
      <div className="App">
        <ul>
          {
            this.state.players.map((player)=>{
              return (
                <li key={player.id}>
                  <Player player={player} />
                </li>
              )
            })
          }
       </ul>
      </div>
    );
  }
}

export default App;
