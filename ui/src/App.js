import React, { Component } from 'react';
import Container from './components/Container';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="app">
          <div className="app__content">
              <Container/>

          </div>

        </div>
    );
  }
}

export default App;
