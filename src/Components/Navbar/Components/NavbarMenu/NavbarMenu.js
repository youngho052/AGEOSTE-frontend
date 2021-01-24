import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../NavbarMenu/NavbarMenu.scss';

class NavbarMenu extends Component {
  render() {
    const { menuList } = this.props;
    const productLink = ['/product', '/product', '/product'];
    return (
      <div className='NavbarMenu'>
        <ul>
          {menuList.map((item, idx) => {
            return (
              <li
                key={item.div}
                className={
                  item.menuName === '나의 라코스테 폴로' ? 'myPolo' : ''
                }>
                <Link to={productLink[idx]}>{item.menuName}</Link>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default NavbarMenu;
