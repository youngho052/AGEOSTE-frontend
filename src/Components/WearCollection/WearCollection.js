import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../WearCollection/WearCollection.scss';

class WearCollection extends Component {
  render() {
    return (
      <div className='WearCollection'>
        <img
          src='https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw549cc0ae/2020/FW20/Modular_V3/poloshop-new/StrateStory-Desk_cosy.jpg?imwidth=1065&impolicy=custom'
          alt='아고스테 후드 스웻셔츠 트레이닝 팬츠와 함께하는 집곡생활'
        />
        <div className='sportsWrap'>
          <span>후드, 스웻셔츠, 트레이닝 팬츠와 함께하는 집콕생활</span>
          <h3>경이로운 편안함</h3>
          <Link to='/'>보러가기</Link>
        </div>
      </div>
    );
  }
}

export default WearCollection;
