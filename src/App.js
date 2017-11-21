import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Names from './names.js';
import Events from './events.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      name_value: 'John',
      names: ['diego', 'kira', 'andy', 'john'],
      movies: [],
      events: []
  };

    this.change_textbox = this.change_textbox.bind(this);
    this.click_button = this.click_button.bind(this);
    this.click_search = this.click_search.bind(this);
  }

  change_textbox(event) {
    this.setState({ name_value: event.target.value });
  }

  click_button(event) {
    var temp = this.state.names;
    temp.push(this.state.name_value);
    this.setState({ names: temp, name_value: ''});
  }

  click_search(event) {
    axios.get(`http://replayfxcalendar.azurewebsites.net/public`).then(
      (response) => {
        this.setState({events: response.data});
      }
    );
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Let's make some stuff
        </p>
        <input type="text" value={this.state.name_value} onChange={this.change_textbox}/>
        <button onClick={this.click_search}>Search</button>
        <Events list_of_events = {this.state.events} search_term={this.state.name_value} />
      </div>
    );
  }
}

export default App;
