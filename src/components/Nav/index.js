import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <h1>Betting dashboard</h1>
        <div className="navLinks">
          <Link to="/">Dashboard</Link>
          <Link to="/coupon">Coupon</Link>
        </div>
      </div>
    )
  }
}

export default Nav
