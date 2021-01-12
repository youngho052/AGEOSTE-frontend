import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FooterCollection extends Component {
  render() {
    return (
      <div className='FooterCollection'>
        <h4>아고스테 컬렉션</h4>
        <ul>
          <li>
            <Link to='/'>남성 POLO</Link>
          </li>
          <li>
            <Link to='/'>여성 POLO</Link>
          </li>
          <li>
            <Link to='/'>아고스테 키즈</Link>
          </li>
          <li>
            <Link to='/'>아고스테 라이브</Link>
          </li>
          <li>
            <Link to='/'>아고스테 스포츠</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterCollection;
