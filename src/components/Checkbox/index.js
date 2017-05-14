import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

// Assets
import Checkmark from '../../assets/checkmark.svg'

class Checkbox extends Component {
  render() {
    return (
      <div className="checkbox">
        <input type="checkbox" id={ this.props.id } />
        <label htmlFor={ this.props.id }>
          <img src={ Checkmark } alt="Checkmark" width="100%" />
        </label>
        <div className="check"></div>
      </div>
    )
  }
}

Checkbox.propTypes = { id: PropTypes.string.isRequired }

export default Checkbox
