import React, { Component } from 'react'
import './index.css'

// Components
import GridBlock from './../../components/GridBlock'
import Coupon from './../../components/Coupon'
import List from './../../components/List'
import ListItem from './../../components/ListItem'

class container extends Component {

  constructor() {
    super()
    this.coupons = [
      {
        date: 5,
        month: 'maj',
        person: 'Tobias',
        system: {
          minRights: 5,
          total: 6
        },
        amountPerBet: 10
      },
      {
        date: 7,
        month: 'september',
        person: 'Andreas',
        system: {
          minRights: 7,
          total: 9
        },
        amountPerBet: 10
      },
      {
        date: 17,
        month: 'oktober',
        person: 'Dennis',
        system: {
          minRights: 5,
          total: 6
        },
        amountPerBet: 15
      },
    ];
  }

  render() {
    return (
      <div className="dashboard">
        <GridBlock columns={12}>
          <div className="span-5">
            <List>
              { this.coupons.map( (coupon, index) =>
                <ListItem
                  date={ coupon.date }
                  month={ coupon.month }
                  person={ coupon.person }
                  system={ coupon.system }
                  amountPerBet={ coupon.amountPerBet } />
              )}
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
