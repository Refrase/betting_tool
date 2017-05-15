import React, { Component } from 'react'
import './index.css'

// Components
import Input from './../Input'
import Button from './../Button'

class FormAddCoupon extends Component {
  render() {
    const styleHeadlineFirst = { marginBottom: '18px', color: 'white' }
    const styleHeadline = { marginTop: '48px', marginBottom: '18px', color: 'white' }
    return (
      <div className="formAddCoupon">
        <h2 style={ styleHeadlineFirst }>Coupon</h2>
        <Input label="Responsible" id="responsible" /> { /* Make select! */ }
        <Input label="Amount per bet" id="amountPerBet" /> { /* Make select! */ }
        <h2 style={ styleHeadline }>Matches</h2>
        <Input label="Home team" id="teamHome" />
        <Input label="Away team" id="teamAway" />
        <Input label="Handicap" id="handicap" /> { /* Make select! */ }
        <Input label="Bet" id="bet" /> { /* Make radios! */ }
        <Input label="Better" id="better" /> { /* Make select! */ }
        <Button label="Add match" />
        { /* Also flip the coupon and add matches to an empty coupon as they are submitted! */ }
        <Button label="Submit coupon" />  { /* Move this button to the empty coupon as the button to finalize the coupon! */ }
      </div>
    )
  }
}

export default FormAddCoupon
