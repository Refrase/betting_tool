import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class FormAddCoupon extends Component {
  render() {
    return (
      <div className="formAddCoupon">
        {this.props.children}
      </div>
    )
  }
}

FormAddCoupon.propTypes = { children: PropTypes.node }

export default FormAddCoupon
