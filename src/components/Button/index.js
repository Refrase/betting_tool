import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

class Button extends Component {
  render() {

    const classes = classnames( 'button', {
      'button-primary': this.props.type === 'primary' ? true : null,
      'button-iconOnly': !this.props.label ? true : null
    });

    return (
      <button className={ classes } onClick={ this.props.onClick } style={ this.props.style }>
        { this.props.icon ? ( <img src={ this.props.icon } alt="" className="button_icon" /> ) : null }
        { this.props.label ? ( <span className="button_label">{ this.props.label }</span> ) : null }
      </button>
    )

  }
}

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
}

Button.defaultProps = { type: 'primary' }

export default Button
