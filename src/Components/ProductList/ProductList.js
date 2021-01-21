import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import '../ProductList/ProductList.scss';

class ProductList extends Component {

  render() {
    const { id,name, price, discount, review, thumbnail, colorCount } = this.props;
    const stars = Array.of(0, 0, 0, 0, 0);
    stars.fill(1,0,review)
    return (
      <div className='ProductList'>
        <div className='product__wrap'>
          <div className='imgContainer'>
            <img  src={thumbnail} alt={name} />
            <span>{`+ ${colorCount} color`}</span>
          </div>
          <div className='contentWrap'>
            <span className='discountCalc'>{`${discount}% 세일`}</span>
            <h3 className='titleName'>
              <Link to={`/product/detail/${id}`}>{name}</Link>
            </h3>
            <ul className="rating">
              {stars.map((star, idx) => {
                return (
                  <li key={idx}>
                    <i className={`${star === 0 ? 'far' : 'fas'} fa-star`} />
                  </li>
                );
              })}
            </ul>
            <span className='price'>{`${Math.round(
              price - price * (discount / 100)
            ).toLocaleString()} 원`}</span>
            <span className='disCount'>{`${Math.round(
              price
            ).toLocaleString()} 원`}</span>
            
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductList);
