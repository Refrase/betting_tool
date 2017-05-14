import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

class FormAddCoupon extends Component {
  render() {
    const classes = classnames( 'formAddCoupon', { 'formAddCoupon-flipped': this.props.flip ? true : null });
    return (
      <div className={ classes }>
        {this.props.children}
      </div>
    )
  }
}

FormAddCoupon.propTypes = {
  children: PropTypes.node,
  flip: PropTypes.bool
}

export default FormAddCoupon
