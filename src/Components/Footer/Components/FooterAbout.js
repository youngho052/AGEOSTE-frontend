import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class FooterAbout extends Component {
  render() {
    return (
      <div className='FooterAbout'>
        <h4>ABOUT AGEOSTE</h4>
        <ul>
          <li>
            <Link to='/'>아고스테 멤버십</Link>
          </li>
          <li>
            <Link to='/'>아고스테 그룹</Link>
          </li>
          <li>
            <Link to='/'>아고스테 채용</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterAbout;
