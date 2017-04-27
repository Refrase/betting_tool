import React, { Component } from 'react'
import './index.css'

// Components
import Header from './../Header'
import Toolbar from './../Toolbar'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Toolbar />
          <div className="content">
            <p>Indhold...</p>
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App
