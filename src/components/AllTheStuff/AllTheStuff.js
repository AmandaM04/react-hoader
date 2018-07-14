import React from 'react';

import itemRequests from '../../firebaseRequest/allTheStuff';
import Items from '../Items/Items';

import './AllTheStuff.css';

class AllTheStuff extends React.Component {
  state = {
    items: [],
  }

  componentDidMount () {
    itemRequests
      .getRequest()
      .then((items) => {
        this.setState({ items });
      })
      .catch((error) => {
        console.error(error.message);
      });
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
