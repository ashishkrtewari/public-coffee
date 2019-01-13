import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import CoffeeTable from './CoffeeTable'

class App extends Component {
  state = {
    levels : {
      coffeeLevel: 100,
      waterLevel: 200
    }
  }
  updateLevels(levelsInput) {
    this.setState({levels: levelsInput})
  }
  render() {
    return (
      <div className="App">
        <Header />        
        <CoffeeTable levels={this.state.levels} updateLevels={this.updateLevels.bind(this)}/>
      </div>
    );
  }
}

export default App;
