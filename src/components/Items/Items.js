import React from 'react';

import './Items.css';

class Items extends React.Component {
  render () {
    const {details} = this.props;
    return (
      <li className="Items">
        <img src={details.itemImage} alt={details.itemName}/>
        <h3 className="name">{details.itemName}</h3>
        <p>{details.itemDescription}</p>
      </li>
    );
  }
}

export default Items;
