import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

class List extends Component {
  render() {
    const classes = classnames( 'list', { 'list-flipped': this.props.flip ? true : null });
    return (
      <ul className={ classes }>
        {this.props.children}
      </ul>
    )
  }
}

List.propTypes = {
  children: PropTypes.node,
  flip: PropTypes.bool
}

export default List
