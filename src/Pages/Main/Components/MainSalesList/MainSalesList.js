import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ON_SALE } from '../../data/MainData';

import '../MainSalesList/MainSalesList.scss';
class MainSalesList extends Component {
  render() {
    return (
      <div className='MainSalesList'>
        <div className='container'>
          {ON_SALE.map((item) => {
            return (
              <div className='list' key={item.id}>
                <img
                  src={item.imgUrl}
                  alt={item.title}
                />
                <div className={`content ${item.title === '남성 폴로' ? 'active' : '' }`}>
                  <span className='subTitle'>{item.subTitle}</span>
                  <h3>{item.title}</h3>
                  <Link to='/'>보러가기</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MainSalesList;
