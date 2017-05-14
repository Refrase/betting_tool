import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

// Utils
import classnames from 'classnames'

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
    const { match, dropdownOptions, index } = this.props
    const { teams, scores, bet, better } = match

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
