import React, { Component } from 'react'
import './index.css'

// Components
import Nav from './../Nav'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Nav />
      </div>
    )
  }
}

export default Header
