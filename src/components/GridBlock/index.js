import React, { Component } from 'react'
import './index.css'

class GridBlock extends Component {
  render() {
    return (
      <div className="gridBlock">
        {this.props.children}
      </div>
    )
  }
}

export default GridBlock
