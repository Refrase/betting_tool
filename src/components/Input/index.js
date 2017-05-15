import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      focused: false,
      hasValue: false
    }
  }

  focus() { this.setState({ focused: !this.state.focused }) }

  checkInputLength(e) {
    if ( e.target.value.length > 0 ) { this.setState({ hasValue: true }) }
    else { this.setState({ hasValue: false }) }
  }

  render() {
    const classes = classnames( 'input', {
      'input-focused': this.state.focused ? true : null,
      'input-hasValue': this.state.hasValue ? true : null
    });
    return (
      <div className={ classes } style={ this.props.style }>
        <label htmlFor={ this.props.id }>{ this.props.label }</label>
        <input
          type={ this.props.type }
          id={ this.props.id }
          onFocus={ this.focus.bind(this) }
          onBlur={ this.focus.bind(this) }
          onChange={ this.checkInputLength.bind(this) } />
      </div>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.bool,
  style: PropTypes.object
 }

Input.defaultProps = { type: 'text' }

export default Input
