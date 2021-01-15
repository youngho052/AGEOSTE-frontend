import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class test extends Component {
  render() {
    return (
      <>
        {this.props.listItem.map((item, index) => {
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

export default test;
