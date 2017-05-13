import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

// Components
import CouponItem from './../CouponItem'

class Coupon extends Component {
  render() {
    const { matches, handicaps, gain } = this.props
    return (
      <ul className="coupon">
        { matches.map( (match, index) => (
          <CouponItem
            key={ index }
            match={ match }
            dropdownOptions={ handicaps } />
        ))}
        <li className="coupon_footer"><b>{ gain } kr</b></li>
      </ul>
    )
  }
}

Coupon.propTypes = {
  matches: PropTypes.array,
  handicaps: PropTypes.array,
  gain: PropTypes.number
}

export default Coupon
