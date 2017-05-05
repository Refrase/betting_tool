import React, { Component } from 'react'
import './index.css'

// Components
import GridBlock from './../../components/GridBlock'
import Coupon from './../../components/Coupon'
import List from './../../components/List'
import ListItem from './../../components/ListItem'

class container extends Component {
  render() {
    return (
      <div className="dashboard">
        <GridBlock columns={12}>
          <div className="span-5">
            <List>
              <ListItem />
            </List>
          </div>
          <div className="span-7">
            <Coupon />
          </div>
        </GridBlock>
      </div>
    );
  }
}

export default container
