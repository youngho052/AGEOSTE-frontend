import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../FooterMemberShip/FooterMemberShip.scss';

class FooterMemberShip extends Component {
  render() {
    return (
      
      <div className='FooterMemberShip'>
        <h4>
          <img src='images/kakao.png' alt='카카오톡 로고입니다.' />
          <span>AGEOSTE KAKAO FRIEND</span>
        </h4>
        <p>
          AGEOSTE 카카오 플러스 친구가 되시면 다양한 쇼핑정보 및 혜택을 받아보실
          수 있습니다.
        </p>
        <Link to='/' className='enrollment'>
          등록하기
        </Link>
        <span className='storeNumber d_block'>238개의 매장</span>
        <Link to='/' className='findStore d_block'>
          매장 찾기
        </Link>

      </div>
    );
  }
}

export default FooterMemberShip;
