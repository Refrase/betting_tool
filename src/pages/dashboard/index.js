import React, { Component } from 'react'
import './index.css'

// Components
import GridBlock from './../../components/GridBlock'
import List from './../../components/List'
import ListItem from './../../components/ListItem'
import Coupon from './../../components/Coupon'
import CouponItem from './../../components/CouponItem'
import Button from './../../components/Button'

// Assets
import plus from './../../assets/icon-plus.svg'

class container extends Component {

  constructor() {
    super()
    // When extracting data to a database: Make sure 'matches', 'systems', 'coupons', 'handicaps' gets extracted to the outer most layer (if object based database)
    // Else try PostgreSQL to join these different parts of data
    this.handicaps = ['-', '1-0', '2-0', '3-0', '0-1', '0-2', '0-3']
    this.coupons = [
      {
        date: 5,
        month: 'maj',
        person: 'Tobias',
        system: {
          minRights: 5,
          total: 6
        },
        amountPerBet: 10,
        potentialGain: 13349,
        matches: [
          {
            teams: ['Southampton', 'West Ham'],
            scores: [3, 1],
            bet: '1',
            better: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAelAAAAJDJjMTMzYzJjLTFlMWQtNDI2My1iNTkxLWZkOGNmNzA4MThlYQ.jpg'
          },
          {
            teams: ['Liverpool', 'Chelsea'],
            scores: [2, 5],
            bet: 'X',
            better: 'https://scontent-amt2-1.cdninstagram.com/t51.2885-19/11821220_723506151110256_1159502586_a.jpg'
          },
          {
            teams: ['Hull', 'Newcastle'],
            scores: [2, 2],
            bet: '2',
            better: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAelAAAAJDJjMTMzYzJjLTFlMWQtNDI2My1iNTkxLWZkOGNmNzA4MThlYQ.jpg'
          }
        ]
      },
      {
        date: 7,
        month: 'september',
        person: 'Andreas',
        system: {
          minRights: 7,
          total: 9
        },
        amountPerBet: 10,
        potentialGain: 3649,
        matches: []
      },
      {
        date: 17,
        month: 'oktober',
        person: 'Dennis',
        system: {
          minRights: 5,
          total: 6
        },
        amountPerBet: 15,
        potentialGain: 71349,
        matches: []
      },
    ]
  }

  render() {
    const listLayout = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
    const buttonPositioning = {
      marginTop: '-24px',
      marginBottom: '12px'
    }
    return (
      <div className="dashboard">
        <GridBlock columns={12}>
          <div className="span-5" style={ listLayout }>
            <List>
              { this.coupons.map( (coupon, index) =>
                <ListItem
                  key={ index }
                  date={ coupon.date }
                  month={ coupon.month }
                  person={ coupon.person }
                  system={ coupon.system }
                  amountPerBet={ coupon.amountPerBet } />
              )}
            </List>
            <Button icon={ plus } style={ buttonPositioning } />
          </div>
          <div className="span-7">
            <Coupon gain={ this.coupons[0].potentialGain }>
              { this.coupons[0].matches.map( (match, index) => (
                <CouponItem
                  key={ index }
                  index={ index }
                  match={ match }
                  dropdownOptions={ this.handicaps } />
              ))}
            </Coupon>
          </div>
        </GridBlock>
      </div>
    );
  }

}

export default container
