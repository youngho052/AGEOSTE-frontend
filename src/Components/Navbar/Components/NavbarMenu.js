import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarSubMenu from './NavbarSubMenu';
class NavbarMenu extends Component {
  onFindId = (id) => {
    this.props.updateSubMenu(id);
  };

  render() {
    return (
      <div className='NavbarMenu'>
        <ul className='gnbMenu'>
          {this.props.onSubMenuList.map((item) => {
            return (
              <li
                key={item.id}
                className={`${
                  item.menuName === '나의 라코스테 폴로' ? 'hoverNot' : ''
                } ${item.menuName === 'SALE' ? 'myPolo' : ''}`}
                onMouseEnter={() => this.onFindId(item.id)}>
                <Link to='/'>{item.menuName}</Link>
              </li>
            );
          })}
        </ul>
        <NavbarSubMenu subMenu={this.props.sendMenuList} />
      </div>
    );
  }
}

export default NavbarMenu;
