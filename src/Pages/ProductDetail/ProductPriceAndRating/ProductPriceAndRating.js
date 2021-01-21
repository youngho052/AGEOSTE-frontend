import React, { Component } from 'react';

import '../../ProductDetail/ProductPriceAndRating/ProductPriceAndRating.scss';
class ProductPriceAndRating extends Component {
  render() {
		const {discount,price,name,rating} = this.props
		const star = Array.of(0,0,0,0,0);
		star.fill(1,0,rating);
    return (
      <div className='ProductPriceAndRating'>
        <span className='detail__sale'>{`${discount}% 할인율`}</span>
        <h2>{name}</h2>
        <div className='price__rating'>
          <ul className='rating'>
            {this.props.rating &&
              star.fill(1, 0, this.props.rating).map((item, idx) => {
                return (
                  <li key={idx}>
                    <i className={`${item === 0 ? 'far' : 'fas'} fa-star`} />
                  </li>
                );
              })}
          </ul>
          <div className='payMent'>
            <span className='discount'>
              {`${Math.round(
                price - price * (discount/ 100)
              ).toLocaleString()} 원`}
            </span>
            <span className='price'>{`${Math.round(
              price
            ).toLocaleString()} 원`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPriceAndRating;
