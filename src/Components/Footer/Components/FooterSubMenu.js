import React, { Component } from 'react';
import FooterAbout from './FooterAbout';
import FooterCollection from './FooterCollection';
import FooterHelp from './FooterHelp';
import FooterMemberShip from './FooterMemberShip';

class FooterSubMenu extends Component {
  render() {
    return (
      <div className='FooterSubMenu'>
        <div className="footerContainer">
          <FooterMemberShip />
          <FooterAbout />
          <FooterCollection />
          <FooterHelp />
        </div>
      </div>
    );
  }
}

export default FooterSubMenu;
