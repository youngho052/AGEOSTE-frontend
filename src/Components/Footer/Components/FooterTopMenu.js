import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FooterTopMenu extends Component {
  render() {
    return (
      <ul className="FooterTopMenu">
        <li>
          <Link to='/'>
            <span className='d_block'>
              <i className='fas fa-recycle'></i>
            </span>
            무료반품
          </Link>
        </li>
        <li>
          <Link to='/'>
            <span className='d_block'>
              <i className='fas fa-truck'></i>
            </span>
            무료배송
          </Link>
        </li>
        <li>
          <Link to='/'>
            <span className='d_block'>
              <i className='far fa-credit-card'></i>
            </span>
            안전결제
          </Link>
        </li>
        <li>
          <Link to='/'>
            <span className='d_block'>
              <i className='fas fa-question-circle'></i>
            </span>
            도움이 필요하세요?
          </Link>
        </li>
      </ul>
    );
  }
}

export default FooterTopMenu;
