import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

// Utils
import classnames from 'classnames'

class GridBlock extends Component {
  render() {

    const classes = classnames( 'gridBlock', {
      [`gridBlock-columns-${this.props.columns}`]: this.props.columns ? true : null
    });

    return (
      <div className={ classes }>
        {this.props.children}
      </div>
    )

  }
}

GridBlock.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number.isRequired
}

export default GridBlock
