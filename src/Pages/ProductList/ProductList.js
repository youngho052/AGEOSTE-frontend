import React, { Component } from 'react';
import Product from './Components/Product';
import { PRODUCT_DATA } from './data'
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: []
    }
  }

  componentDidMount() {
    this.setState({
      productList: PRODUCT_DATA
    })
  }

  starNumToArr = (starNum) => {
    const num = new Array(5);
    num.fill(0, 0, starNum).fill(1, starNum);
    return num;
  }

  render() {
    const { productList } = this.state;
    const { starNumToArr } = this;

    return (
      <>
      <div className="category_title_container">
        <div className="category_title">남성 스웨터</div>
      </div>
      <div className="ProductList">
        {
          productList.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                starNumToArr={starNumToArr}
              />
            )
          })
        }
      </div>
      </>
    );
  }
}

export default ProductList;