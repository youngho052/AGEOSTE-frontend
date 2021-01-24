import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../WearCollection/WearCollection.scss';

class WearCollection extends Component {
  render() {
    return (
      <div className='WearCollection'>
        <img
          src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6ce6ed99-9249-4d9e-8ddf-56a22789f7f2/mainbg3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210124T082408Z&X-Amz-Expires=86400&X-Amz-Signature=6b6e795aad7eb45ff8d7f98ba6a6f93c1ff4d06685f8122529dfec7e527c6cff&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22mainbg3.png%22'
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
