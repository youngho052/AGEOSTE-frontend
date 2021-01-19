import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FOOTER_TOP_DATA } from '../../data/FooterDatas';
import '../FooterTopMenu/FooterTopMenu.scss';

class FooterTopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerTopMenu: [],
    };
  }
  
  componentDidMount = () => {
    this.setState({
      footerTopMenu: FOOTER_TOP_DATA,
    });
  };

  render() {
    const { footerTopMenu } = this.state;
    return (
      <ul className='FooterTopMenu'>
        {footerTopMenu.map((list) => {
          return (
            <li key={list.id}>
              <Link to='/'>
                <span className='d_block'>
                  <i className={`fas ${list.classNaming}`} />
                </span>
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FooterTopMenu;
