import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

// Components
import Input from './../Input'
import Button from './../Button'
import Radio from './../Radio'

class FormAddCoupon extends Component {
  render() {
    const { systems, betters, bets, handicaps } = this.props
    const styleHeadlineFirst = { marginBottom: '12px', color: 'white' }
    const styleHeadline = { marginTop: '48px', marginBottom: '12px', color: 'white' }
    const styleRadiosWrap = { display: 'inline-block', margin: '0 24px', position: 'relative' }
    const styleRadios = { top: '5px' }
    return (
      <div className="formAddCoupon">
        <h2 style={ styleHeadlineFirst }>Matches</h2>
        { /* Add matches here as the user adds them */ }
        <Input label="Home team" id="teamHome" />&mdash;&nbsp;&nbsp;&nbsp;
        <Input label="Away team" id="teamAway" />
        <select>{ handicaps.map( ( option, index ) => ( <option key={ index } value={ option }>{ option }</option> ))}</select>
        <div style={ styleRadiosWrap }>
          <span className="formAddCoupon_labelRadios">Bet:</span>
          { bets.map( ( bet, index ) => ( <Radio name='betRadios' id={ 'bet-' + bet } label={ bet } style={ styleRadios } /> ))}
        </div>
        <select>{ betters.map( ( option, index ) => ( <option key={ index } value={ option }>{ option }</option> ))}</select>
        <Button label="Add match" />
        <h2 style={ styleHeadline }>Coupon</h2>
        <select>{ systems.map( ( option, index ) => ( <option key={ index } value={ option }>{ option }</option> ))}</select>
        <Input label="Amount per bet" id="amountPerBet" /> { /* Validate that it's a number! */ }
        <select>{ betters.map( ( option, index ) => ( <option key={ index } value={ option }>{ option }</option> ))}</select>
        <Input label="Date" id="date" /> { /* Make date picker! */ }
        <Button label="Submit coupon" />  { /* Move this button to the empty coupon as the button to finalize the coupon! */ }
      </div>
    )
  }
}

FormAddCoupon.propTypes = {
  systems: PropTypes.array.isRequired,
  betters: PropTypes.array.isRequired,
  bets: PropTypes.array.isRequired,
  handicaps: PropTypes.array.isRequired,
}

export default FormAddCoupon
