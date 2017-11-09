import React, { Component } from 'react';

class CharacterList extends Component {
  render() {
    return(
      <div>
          <h4>Characters</h4>
          <ul className="list-group">
              {
                  this.props.characters.map(character => {
                      return (
                          <li key={character.id} className="list-group-item">
                              <div className="list-item">{character.name}</div>
                              <div
                                  className="list-item right-button"
                                  onClick={() => {}}>
                                  +
                              </div>
                          </li>
                      )
                  })
              }
          </ul>
      </div>
    )
  }
}

export default CharacterList;
