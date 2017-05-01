import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Dashboard</Link>
        <Link to="/coupon">Coupon</Link>
      </div>
    )
  }
}

export default Nav
