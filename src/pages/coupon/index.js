import React, { Component } from 'react'
import './index.css'

// Components
import GridBlock from './../../components/GridBlock'

class container extends Component {
  render() {
    return (
      <div className="coupon">
        <GridBlock>
          <h1>Coupon!</h1>
        </GridBlock>
      </div>
    );
  }
}

export default container
