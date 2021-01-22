import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarSubList extends Component {
  render() {
    const { listItem } = this.props;
    return (
      <>
        {listItem.map((item, index) => {
          return (
            <li key={index}>
              <Link to='/'>{item}</Link>
            </li>
          );
        })}
      </>
    );
  }
}

export default NavbarSubList;
