import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerAbout: ['아고스테 멤버십', '아고스테 그룹', '아고스테 채용'],
    };
  }
  render() {
    const { footerAbout } = this.state;
    return (
      <div className='FooterAbout'>
        <h4>ABOUT AGEOSTE</h4>
        <ul>
          {footerAbout.map((list,idx) => {
            return (
              <li key={idx}>
                <Link to='/'>{list}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FooterAbout;
