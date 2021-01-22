import React, { Component } from 'react';
import '../ProductSize/ProductSize.scss';

class ProductSize extends Component {
  render() {
    return (
      <div className='ProductSize'>
        <div className='sizeContainer'>
          <form>
            <select onChange={this.props.onChangeSize}>
              <option>사이즈를 선택해주세요</option>
              <option value='1'>Small Size</option>
              <option value='2'>Midum Size</option>
              <option value='3'>Large Size</option>
              <option value='4'>XLarge Size</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductSize;
