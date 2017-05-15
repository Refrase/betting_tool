import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

// Components
import Checkbox from './../Checkbox'

class CouponItem extends Component {
  constructor() {
    super()
    this.state = { checked: false }
  }

  markCouponItemAsChecked(e) {
    const checked = e.target.checked ? true : false
    this.setState({ checked: checked })
  }

  render() {
    const { match, index } = this.props
    const { teams, scores, bet, handicap, better } = match

    const imageStyle = { borderRadius: '50%' }

    const classes = classnames( 'couponItem', { 'couponItem-checked': this.state.checked ? true : null });

    return (
      <li className={ classes }>
        <Checkbox id={ 'checkbox' + index } onChange={ this.markCouponItemAsChecked.bind(this) } />
        <div className="matchData">
          <p>{ teams[0] }</p>
          <p><b>{ scores[0] }&ndash;{ scores[1] }</b></p>
          <p>{ teams[1] }</p>
        </div>
        <p className="couponItem_handicap">{ handicap !== 'No handicap' ? handicap : '' }</p>
        <div className="betWrap">
          <p className="bet">{ bet }</p>
          <img
            src={ better }
            alt="Better"
            width="28" height="28"
            style={ imageStyle } />
        </div>
      </li>
    )
  }
}

CouponItem.propTypes = {
  index: PropTypes.number.isRequired,
  match: PropTypes.object
}

export default CouponItem
