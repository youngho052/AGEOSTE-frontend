import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavbarMenu extends Component {
  render() {
    return (
      <>
        <ul className='NavbarMenu'>
          <li>
            <Link to='/'>Men</Link>
          </li>
          <li>
            <Link to='/'>Women</Link>
          </li>
          <li>
            <Link to='/'>Kids</Link>
          </li>
          <li>
            <Link to='/'>FW20 시즌오프 전체상품</Link>
          </li>
          <li className='myPolo'>
            <Link to='/'>나의 라코스테 폴로</Link>
          </li>
          <li>
            <Link to='/'>Lacoste Inside</Link>
          </li>
          <li>
            <button>
              <i className='fas fa-search'></i>
            </button>
          </li>
        </ul>
      </>
    );
  }
}

export default NavbarMenu;
