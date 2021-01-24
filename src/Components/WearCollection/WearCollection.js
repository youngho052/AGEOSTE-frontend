import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../WearCollection/WearCollection.scss';

class WearCollection extends Component {
  render() {
    return (
      <div className='WearCollection'>
        <img
          src='https://lh6.googleusercontent.com/B5oSu75kdNYXvkD9DmVoqnN-QOUa_7bB0_EVUdbcpeHVWbmkVqndv7yH0BJeUk26qSaWRpkAc9LpqSezfZJf=w1920-h937-rw'
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
