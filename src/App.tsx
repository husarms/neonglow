import React, { Component } from 'react';
import Jumbotron from './components/jumbotron';
import NavigationBar from './components/navigation-bar';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
