import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../NavbarMenu/NavbarMenu.scss';
class NavbarMenu extends Component {
  onFindId = (id) => {
    this.props.updateSubMenu(id);
  };

  render() {
    const{onSubMenuList} = this.props;
    return (
      <div className='NavbarMenu'>
        <ul className='gnbMenu'>
          {onSubMenuList.map((item) => {
            return (
              <li
                key={item.id}
                className={`${
                  item.menuName === '나의 라코스테 폴로' ? 'hoverNot' : ''
                } ${item.menuName === 'SALE' ? 'myPolo' : ''}`}>
                <Link to='/login'>{item.menuName}</Link>
              </li>
            );
          })}
        </ul>
        {/* <NavbarSubMenu subMenu={this.props.sendMenuList} /> */}
      </div>
    );
  }
}

export default NavbarMenu;
