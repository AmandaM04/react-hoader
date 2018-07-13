import React from 'react';

import './Items.css';

class Items extends React.Component {
  render () {
    const {details} = this.props;
    const image = require(`${details.image}`);
    return (
      <li className="Items">
        <img src={image} alt={details.name}/>
        <h3 className="name">{details.name}</h3>
        <p>{details.desc}</p>
      </li>
    );
  }
}

export default Items;
