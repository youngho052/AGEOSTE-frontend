import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FOOTERTOPDATA } from './data/FooterDatas';

class FooterTopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerTopMenu: [],
    };
  }
  componentDidMount = () => {
    this.setState({
      footerTopMenu: FOOTERTOPDATA,
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
                <span className='d__block'>
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
