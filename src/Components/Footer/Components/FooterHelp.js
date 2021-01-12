import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterHelp extends Component {
  render() {
    return (
      <div className='FooterHelp'>
        <h4>도움말 및 연락처</h4>
        <ul>
          <li>
            고객센터
          </li>
          <li>
            <Link to="/">1588-1555</Link>
          </li>
          <li>
            아고스테의 고객 센터는 고객님을 위해 주중 오전 9시부터 6시까지 언<br/>
            열려있습니다.(점심시간 12:30 ~ 13:30)
          </li>
          <li>
            <Link to="/">1:1 문의하기</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterHelp;
