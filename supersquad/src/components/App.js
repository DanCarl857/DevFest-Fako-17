import React, { Component } from 'react';
import '../styles/main.css';

// components
import CharacterList from './CharacterList';
import HeroesList from './HeroesList';
import SquadStats from './SquadStats';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [{
          "id": 0,
          "name": "Superman",
          "strength": 10,
          "intelligence": 7,
          "speed": 9
          },
          {
          "id": 1,
          "name": "Batman",
          "strength": 7,
          "intelligence": 10,
          "speed": 6
          },
          {
          "id": 2,
          "name": "Wonderwoman",
          "strength": 5,
          "intelligence": 9,
          "speed": 7
          },
          {
          "id": 3,
          "name": "Flash",
          "strength": 5,
          "intelligence": 6,
          "speed": 10
          },
          {
          "id": 4,
          "name": "Green Lantern",
          "strength": 7,
          "intelligence": 8,
          "speed": 7
          },
          {
          "id": 5,
          "name": "Aquaman",
          "strength": 8,
          "intelligence": 7,
          "speed": 8
          },
          {
          "id": 6,
          "name": "Cyborg",
          "strength": 9,
          "intelligence": 8,
          "speed": 6
          },
          {
          "id": 7,
          "name": "Green Arrow",
          "strength": 5,
          "intelligence": 9,
          "speed": 7
          },
          {
          "id": 8,
          "name": "Hawkman",
          "strength": 5,
          "intelligence": 8,
          "speed": 8
          },
          {
          "id": 9,
          "name": "Supergirl",
          "strength": 10,
          "intelligence": 9,
          "speed": 7
      }],
      heroes: [],
      stats: []
    }
  }


  render() {
    return (
      <div className="App">
          <h2>SuperSquad</h2>
          <div className="row">
              <div className="col col-md-4">
                  <CharacterList characters={this.state.characters}/>
              </div>
              <div className="col col-md-4">
                  <HeroesList />
              </div>
              <div className="col col-md-4">
                  <SquadStats />
              </div>
          </div>
      </div>
    )
  }
};

export default App;
