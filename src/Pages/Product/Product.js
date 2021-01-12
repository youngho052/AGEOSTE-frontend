import React, { Component } from 'react';
import Item from './Components/Item';
import { PRODUCT_DATA } from './data'
import './Product.scss';

class Product extends Component {
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
      <div className="Product">
        {
          productList.map((product, index) => {
            return (
              <Item
                key={index}
                product={product}
                starNumToArr={starNumToArr}
              />
            )
          })
        }
      </div>
    );
  }
}

export default Product;