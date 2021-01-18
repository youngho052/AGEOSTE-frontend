import React, { Component } from 'react';

import FooterList from './FooterList';
import FooterMemberShip from '../FooterMemberShip/FooterMemberShip';
import { FOOTERDATA } from '../../data/FooterDatas';
import '../FooterSubMenu/FooterSubMenu.scss';

class FooterSubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerSubMenu: FOOTERDATA,
    };
  }

  render() {
    const { footerSubMenu } = this.state;

    return (
      <div className='FooterSubMenu'>
        <div className='footerContainer'>
          <FooterMemberShip />
          {footerSubMenu.map((item) => {
            return (
              <div key={item.id} className='footerListMenu'>
                <h4>{item.title}</h4>
                <ul>
                  <FooterList menuList={item.list} />
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FooterSubMenu;
