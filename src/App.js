import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
            </div>

            <div className="card-body">
              <p>{todo.description}</p>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Tasks
            </a>
        </nav>

        { todos }

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
