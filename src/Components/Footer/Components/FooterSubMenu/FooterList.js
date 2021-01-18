import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterList extends Component {
  render() {
    return (
      <>
        {this.props.menuList.map((item, index) => {
          return (
            <li key={index}>
              <Link to='/'>{item}</Link>
            </li>
          );
        })}
      </>
    );
  }
}

export default FooterList;
