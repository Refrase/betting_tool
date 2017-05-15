import React, { Component } from 'react'
import './index.css'

// Components
import GridBlock from './../../components/GridBlock'
import Flipper from './../../components/Flipper'
import List from './../../components/List'
import ListItem from './../../components/ListItem'
import FormAddCoupon from './../../components/FormAddCoupon'
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
    this.bets = ['1', 'X', '2']
    this.handicaps = ['No handicap', '1-0', '2-0', '3-0', '0-1', '0-2', '0-3']
    this.betters = ['Andreas', 'Tobias', 'Dennis']
    this.systems = ['No system', '5/6', '7/9']
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
            handicap: '1-0',
            better: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAelAAAAJDJjMTMzYzJjLTFlMWQtNDI2My1iNTkxLWZkOGNmNzA4MThlYQ.jpg'
          },
          {
            teams: ['Liverpool', 'Chelsea'],
            scores: [2, 5],
            bet: 'X',
            handicap: '0-2',
            better: 'https://scontent-amt2-1.cdninstagram.com/t51.2885-19/11821220_723506151110256_1159502586_a.jpg'
          },
          {
            teams: ['Hull', 'Newcastle'],
            scores: [2, 2],
            bet: '2',
            handicap: 'No handicap',
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

    this.state = { addingCoupon: true } // CHANGE BACK TO FALSE!
  }

  addCoupon() { this.setState({ addingCoupon: !this.state.addingCoupon }) }

  render() {
    const styleflipArea = { perspective: 1200, marginBottom: '24px' }
    const styleButton = { position: 'fixed', left: 'calc(50% - 24px)', bottom: '24px', zIndex: '1001' }
    return (
      <div className="dashboard">
        <GridBlock columns={12}>
          <div className="span-5" style={ styleflipArea }>
            <Flipper
              flip={ this.state.addingCoupon ? true : null }
              front={
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
              }
              back={
                <FormAddCoupon
                  bets={ this.bets }
                  handicaps={ this.handicaps }
                  betters={ this.betters }
                  systems={ this.systems } />
              } />
          </div>
          <div className="span-7">
            <Coupon gain={ this.coupons[0].potentialGain }>
              { this.coupons[0].matches.map( (match, index) => (
                <CouponItem
                  key={ index }
                  index={ index }
                  match={ match } />
              ))}
            </Coupon>
          </div>
          <div className="span-12">
            <Button icon={ plus } type="secondary" onClick={ this.addCoupon.bind(this) } style={ styleButton } />
          </div>
        </GridBlock>
      </div>
    );
  }

}

export default container
