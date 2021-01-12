import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterTopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerTopMenu: [
        { id: 1, name: '무료반품', classNaming: 'fa-recycle' },
        { id: 2, name: '무료배송', classNaming: 'fa-truck' },
        { id: 3, name: '안전결제', classNaming: 'fa-credit-card' },
        {
          id: 4,
          name: '도움이 필요하세요?',
          classNaming: 'fa-question-circle',
        },
      ],
    };
  }
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
