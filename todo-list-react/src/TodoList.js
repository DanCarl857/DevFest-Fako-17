import React, { Component } from 'react';

// Components
import TodoItems from './TodoItems'

// Styling
import './TodoList.css';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
        return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })
  }

  addItem(e) {
    var itemArray = this.state.items;

    if(this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }
    console.log(itemArray);
    e.preventDefault(); // <-- What is this?
  }

  // onChange = (event) => {
  //   this.setState({ term: event.target.value })
  // }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     term: '',
  //     items: [ ...this.state.items, this.state.term ]
  //   });
  // }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              placeholder="Enter a task..."
              ref={(a) => this._inputElement = a}
              value={this.state.term}
              // onChange={this.onChange}
              // value={this.state.term}
            />
            <button>Add</button>
          </form>
        </div>
        <TodoItems
          delete={this.deleteItem.bind(this)}
          entries={this.state.items}
        />
      </div>
    )
  }
}

export default TodoList;
