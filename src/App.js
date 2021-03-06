import React, { Component } from 'react';
import routes from './routes';
import Nav from './Components/Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1 style={{ padding: '200px 35%' }}>
          This is where your pages will appear
        </h1>
        {routes}
      </div>
    );
  }
}

export default App;
