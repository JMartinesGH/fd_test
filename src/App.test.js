import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { battle } from './utils/api';
import Player from './components/Player';


const playerOne = {
  "first_name": "Stephen",
  "fixture": {
    "_members": ["112160"],
    "_ref": "fixtures.id"
  },
  "fppg": 47.94303797468354,
  "id": "15475-9524",
  "images": {
    "default": {
      "height": 200,
      "url": "https://d17odppiik753x.cloudfront.net/playerimages/nba/9524.png",
      "width": 200
    }
  },
  "injured": false,
  "injury_details": "knee",
  "injury_status": "o",
  "last_name": "Curry",
  "news": {
    "latest": "2016-05-02T18:35:15Z"
  },
  "played": 79,
  "player_card_url": "https://www.fanduel.com/e/Player/9524/Stats/15475",
  "position": "PG",
  "removed": false,
  "salary": 10600,
  "starting_order": null,
  "team": {
    "_members": ["687"],
    "_ref": "teams.id"
  }
}

const playerTwo = {
  "first_name": "Draymond",
  "fixture": {
    "_members": ["112160"],
    "_ref": "fixtures.id"
  },
  "fppg": 38.9604938271605,
  "id": "15475-15860",
  "images": {
    "default": {
      "height": 200,
      "url": "https://d17odppiik753x.cloudfront.net/playerimages/nba/15860.png",
      "width": 200
    }
  },
  "injured": false,
  "injury_details": null,
  "injury_status": null,
  "last_name": "Green",
  "news": {
    "latest": "2016-05-02T01:24:54Z"
  },
  "played": 81,
  "player_card_url": "https://www.fanduel.com/e/Player/15860/Stats/15475",
  "position": "PF",
  "removed": false,
  "salary": 9300,
  "starting_order": null,
  "team": {
    "_members": ["687"],
    "_ref": "teams.id"
  }
}
// render player component with Stephen Curry
test('render player component', ()=>{
 const { getByText } = render(<Player player={playerOne} onSelection={()=>{console.log('selected')}} playerNumber={'playerOne'} selectClass={null} />)
 const playerName = getByText(/Stephen Curry/i)
 expect(playerName).toBeInTheDocument()
})

// test battle funciton with two players, expect Stephen Curry to win
test('battle function',()=>{
 const value = battle(playerOne, playerTwo)
 expect(value).toStrictEqual([playerOne,playerTwo])
})
