import React, { Component } from 'react';
import FooterTopMenu from './Components/FooterTopMenu';
import FooterSubMenu from './Components/FooterSubMenu';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <>
        <footer className='Footer'>
          <FooterTopMenu />
          <FooterSubMenu />
          <div className='footerInfo'>
            <address>
              <span className='d_block'>
                (주)아고스테ᅵ대표이사 위고두ᅵ서울특별시 강남구 선릉 위워크
              </span>
              <span className='d_block'>
                사업자등록번호120-123-4567891 사업자정보확인
                ▶ᅵ통신판매업신고번호제 2021-서울홍대-01010호123-456
              </span>
              <span className='d_block'>
                개인정보관리책임자: 유재현 CUSTOMER SERVICE TEL 1588-155 ,
                CS-KR@AGEOSTE
              </span>
            </address>
            <div className='insurance'>
              <span className='d_block'>
                서울보증보험(주) 이행보증보험 고객님은 안전거래를 위해
                <br />
                현금등으로 결제시 결제금액 전액에 대해 저희 쇼핑몰에서 가입한
                <br />
                서울보증보험(주)의 이행보증보험 서비스를 이용하실 수<br />
                있습니다서비스가입사실 확인
              </span>
            </div>
          </div>
          <ul className='siteMap'>
            <li>사이트 맵&nbsp;&nbsp; |</li>
            <li>법적 고지&nbsp;&nbsp; |</li>
            <li>이용약관&nbsp;&nbsp; |</li>
            <li>개인정보처리방침&nbsp;&nbsp; |</li>
            <li>사이즈 가이드</li>
          </ul>
        </footer>
      </>
    );
  }
}

export default Footer;
