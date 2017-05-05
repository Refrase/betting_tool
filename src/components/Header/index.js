import React, { Component } from 'react'
import './index.css'

// Components
import GridBlock from './../../components/GridBlock'
import Nav from './../Nav'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <GridBlock columns={12}>
          <div className="span-12">
            <Nav />
          </div>
        </GridBlock>
      </div>
    )
  }
}

export default Header
