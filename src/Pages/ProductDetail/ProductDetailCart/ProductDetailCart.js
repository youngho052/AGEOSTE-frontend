import React, { Component } from 'react';
import '../ProductDetailCart/ProductDetailCart.scss';

class ProductDetailCart extends Component {
  render() {
    const {
      imgUrl,
      toggle,
      productName,
      onSubmit,
      price,
      meassage,
      size,
      discount,
    } = this.props;
    const sizeGuide = ['Small Size', 'Midum Size', 'Large Size', 'XLarge Size'];
    return (
      <div className='ProductDetailCart'>
        <div className={`container ${toggle ? 'active' : ''}`}>
          <div className='cart__wrap'>
            <img src={imgUrl} alt='images name' />
            <div className='cartItem'>
              <span className='name'>{productName}</span>
              <span className='colorCode__size'>{sizeGuide[size - 1]}</span>
            </div>

            <div className='price__wrap'>
              <span className='discountPrice d_block'>{`${(
                price -
                price * (discount / 100)
              ).toLocaleString()} 원`}</span>
              <span className='price d_block'>{`${Math.round(
                price
              ).toLocaleString()} 원`}</span>
            </div>
            <span className='close' onClick={this.props.onhandleToggle && this.props.onhandleToggle}>
              <i class='fas fa-times' />
            </span>
          </div>
          <button className='addCart' onClick={onSubmit} type='button'>
            {meassage ? '쇼핑백에 추가 되었습니다' : '쇼핑백에 추가하기'}
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetailCart;
