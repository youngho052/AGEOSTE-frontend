import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavbarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        'Men',
        'Women',
        'Kids',
        'FW20 시즌오프 전체상품',
        '나의 라코스테 폴로',
        'Lacoste Inside',
      ],
    };
  }

  render() {
    const { menuList } = this.state;
    return (
      <ul className='NavbarMenu'>
        {menuList.map((item, idx) => {
          return (
            <li
              key={idx}
              className={item === 'FW20 시즌오프 전체상품' ? 'myPolo' : ''}>
              <Link to='/'>{item}</Link>
            </li>
          );
        })}
        <li>
          <button>
            <i className='fas fa-search' />
          </button>
        </li>
      </ul>
    );
  }
}

export default NavbarMenu;
