import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class List extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.children}
      </ul>
    )
  }
}

List.propTypes = { children: PropTypes.node }

export default List
