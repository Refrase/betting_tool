import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

class Flipper extends Component {
  render() {
    const classes = classnames( 'flipper', { 'flipper-flipped': this.props.flip ? true : null });
    return (
      <div className={ classes }>
        <div className="front">{ this.props.front }</div>
        <div className="back">{ this.props.back }</div>
      </div>
    )
  }
}

Flipper.propTypes = {
  flip: PropTypes.bool,
  front: PropTypes.node,
  back: PropTypes.node,
 }

export default Flipper
