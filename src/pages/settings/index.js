import React, { Component } from 'react'
import './index.css'

// Components
import GridBlock from './../../components/GridBlock'

class container extends Component {
  render() {
    return (
      <div className="settings">
        <GridBlock columns={12}>
          <h1>Settings</h1>
        </GridBlock>
      </div>
    );
  }
}

export default container
