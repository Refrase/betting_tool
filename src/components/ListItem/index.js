import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

class ListItem extends Component {
  render() {
    const { date, month, person, system, amountPerBet } = this.props;
    return (
      <li className="listItem">
        <div className="listItem_left">
          <p className="listItem_date">{date}. {month}</p>
          { person ? ( <p className="listItem_person">by {person}</p> ) : null }
        </div>
        <div className="listItem_right">
          { system ? ( <p className="listItem_system">{system.minRights}/{system.total}</p> ) : null }
          <p className="listItem_amount">{amountPerBet * system.total} kr</p>
        </div>
      </li>
    )
  }
}

ListItem.propTypes = {
  date: PropTypes.number.isRequired,
  month: PropTypes.numberisRequired,
  person: PropTypes.string,
  system: PropTypes.object,
  amountPerBet: PropTypes.number.isRequired
}

export default ListItem
