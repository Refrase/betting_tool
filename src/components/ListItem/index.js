import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

class ListItem extends Component {
  render() {
    return (
      <li className="listItem">
        <p>List item</p>
      </li>
    )
  }
}

ListItem.propTypes = {}

export default ListItem
