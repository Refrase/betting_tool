import React, { Component } from 'react'
import './index.css'

// Components
import GridBlock from './../../components/GridBlock'
import Toolbar from './../../components/Toolbar'

class container extends Component {
  render() {
    return (
      <div className="dashboard">
        <GridBlock noGutter>
          <Toolbar />
          <div className="content">
            <p>Indhold...</p>
          </div>
        </GridBlock>
      </div>
    );
  }
}

export default container
