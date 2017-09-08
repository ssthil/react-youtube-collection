import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Youtube Video Collection</h2>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZkSV5IUqHMM" frameborder="0" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fZKaq623y38" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default App;
