import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

// Components
import Checkbox from './../Checkbox'

class CouponItem extends Component {
  render() {
    const { match, dropdownOptions, index } = this.props
    const { teams, scores, bet, better } = match
    const imageStyle = { borderRadius: '50%' }
    return (
      <li className="couponItem">
        <Checkbox id={ 'checkbox' + index } />
        <div className="matchData">
          <p>{ teams[0] }</p>
          <p><b>{ scores[0] }&ndash;{ scores[1] }</b></p>
          <p>{ teams[1] }</p>
        </div>
        <select>
          { dropdownOptions.map( ( option, index ) => (
            <option key={ index } value={ option }>
              { option }
            </option>
          ))}
        </select>
        <div className="betWrap">
          <p className="bet">{ bet }</p>
          <img
            src={ better }
            alt="Better"
            width="36" height="36"
            style={ imageStyle } />
        </div>
      </li>
    )
  }
}

CouponItem.propTypes = {
  index: PropTypes.number.isRequired,
  match: PropTypes.object,
  dropdownOptions: PropTypes.array,
}

export default CouponItem
