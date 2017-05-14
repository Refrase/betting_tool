import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

class ListItem extends Component {
  render() {
    const { date, month, person, system, amountPerBet } = this.props;
    return (
      <li className="listItem">
        <p>
          { system ? ( <span className="listItem_system">{system.minRights}/{system.total}</span> ) : null }
          <span className="listItem_amount">&mdash;&nbsp; {amountPerBet * system.total} kr</span>
        </p>
        <div>
          <p className="listItem_date">{date}. {month}</p>
          { person ? ( <p className="listItem_person">by {person}</p> ) : null }
        </div>
      </li>
    )
  }
}

ListItem.propTypes = {
  date: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  person: PropTypes.string,
  system: PropTypes.object,
  amountPerBet: PropTypes.number.isRequired
}

export default ListItem
