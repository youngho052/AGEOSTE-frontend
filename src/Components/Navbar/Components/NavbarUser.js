import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarUser: ['fa-map-marker-alt', 'fa-user', 'fa-cart-plus'],
    };
  }
  render() {
    const { navbarUser } = this.state;
    return (
      <ul className='NavbarUser'>
        {navbarUser.map((list, idx) => {
          return (
            <li key={idx}>
              <Link to='/'>
                <i className={`fas ${list}`} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavbarUser;
