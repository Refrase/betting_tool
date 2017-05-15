import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

// Assets
import Checkmark from './assets/checkmark.svg'

class Radio extends Component {
  render() {
    return (
      <div className="radio" style={ this.props.style }>
        <input type="radio" name={ this.props.name } id={ this.props.id } onChange={ this.props.onChange } />
        <label htmlFor={ this.props.id }>{ this.props.label }</label>
        <div className="check">
          <img src={ Checkmark } alt="Checkmark" width="100%" />
        </div>
      </div>
    )
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  style: PropTypes.object
 }

export default Radio
