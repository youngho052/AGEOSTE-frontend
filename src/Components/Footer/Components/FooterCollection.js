import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [
        '남성 POLO',
        '여성 POLO',
        '아고스테 키즈',
        '아고스테 라이브',
        '아고스테 스포츠',
      ],
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className='FooterCollection'>
        <h4>아고스테 컬렉션</h4>
        <ul>
          {collection.map((item,idx) => {
            return (
              <li key={idx}>
                <Link to='/'>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FooterCollection;
