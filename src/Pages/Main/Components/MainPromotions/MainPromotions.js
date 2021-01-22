import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../MainPromotions/MainPromotions.scss';
class MainPromotions extends Component {
  render() {
    return (
      <div className='MainPromotions'>
        <div className='container'>
          <img src={this.props.imgUrl} alt={this.props.altMsg} />
          <div className='contentWrap'>
            <h2>
              {this.props.title} <span>{this.props.subTitle}</span>
            </h2>
            <p>{this.props.parAgraphs}</p>
            <div className='locationFw'>
              <Link to='/'>{this.props.menLinks}</Link>
              <Link
                to='/'
                className={this.props.womenLinks === '' ? 'd__none' : ''}>
                {this.props.womenLinks}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPromotions;
