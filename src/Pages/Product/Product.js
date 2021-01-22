import React, { Component } from 'react';
// import ProductList from '../ProductList/ProductList';
import './Product.scss';
class Product extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount = () => {
    
  }
  render() {
    return (
			<div className="Product">
        <div className='container'>
          {/* <ProductList /> */}
        </div>
      </div>
    );
  }
}

export default Product;
