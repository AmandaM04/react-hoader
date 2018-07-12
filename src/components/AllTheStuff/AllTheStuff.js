import React from 'react';

import Items from '../Items/Items';

import './AllTheStuff.css';

class AllTheStuff extends React.Components {
  state = {
    items: [],
  }

  render () {
    const itemComponents = this.state.items.map((item) => {
      return (
        <Items
          key={item.id}
          details={item}
        />
      );
    });

    return (
      <div className="AllTheStuff">
        <h1>AllTheStuff</h1>
        <ul className="stuff">
          {itemComponents}
        </ul>
      </div>
    );
  }
}

export default AllTheStuff;
