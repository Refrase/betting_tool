import React, { Component } from 'react'
import './index.css'

// Components
import Header from './../Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default App
