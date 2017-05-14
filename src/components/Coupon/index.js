import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Coupon extends Component {
  render() {
    const { children, gain } = this.props
    return (
      <ul className="coupon">
        { children }
        <li className="coupon_footer"><b>{ gain } kr</b></li>
      </ul>
    )
  }
}

Coupon.propTypes = {
  children: PropTypes.node,
  gain: PropTypes.number
}

export default Coupon
