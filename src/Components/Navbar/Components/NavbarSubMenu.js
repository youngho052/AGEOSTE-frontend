import React, { Component } from 'react';
import NavbarSubList from './NavbarSubList';

class NavbarSubMenu extends Component {
  render() {
    return (
      <div className='NavbarSubMenu'>
        <div className='subList'>
          {this.props.subMenu.map((list) => {
            return (
              <div
                key={list.id}
                className={`list ${
                  list.title === '테마로 쇼핑하기' ? 'thema' : ''
                }`}>
                <h2>{list.title}</h2>
                <ul>
                  <NavbarSubList listItem={list.cart} />
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavbarSubMenu;
