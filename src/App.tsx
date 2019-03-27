import React, { Component } from 'react';
import HotNeon from './components/hot-neon';
import Jumbotron from './components/jumbotron';
import NavigationBar from './components/navigation-bar';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <HotNeon />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
