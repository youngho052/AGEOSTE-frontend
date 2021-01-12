import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarUser extends Component {
  render() {
    return (
      <ul className='NavbarUser'>
        <li>
          <Link to='/' className="test">
            <i className='fas fa-map-marker-alt'></i>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='far fa-user'></i>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fas fa-cart-plus'></i>
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavbarUser;
