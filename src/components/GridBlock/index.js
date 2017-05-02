import React, { Component } from 'react'
import './index.css'

import classnames from 'classnames'

class GridBlock extends Component {
  render() {
    const classes = classnames( 'gridBlock', { 'noGutter': this.props.noGutter });
    return (
      <div className={ classes }>
        {this.props.children}
      </div>
    )
  }
}

export default GridBlock
