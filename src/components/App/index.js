import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'

// Components
import Header from './../Header'

// Pages (routes)
import Dashboard from './../../pages/dashboard'
import Coupon from './../../pages/coupon'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={ Dashboard } />
          <Route path="/coupon" component={ Coupon } />
        </div>
      </Router>
    );
  }
}

export default App
