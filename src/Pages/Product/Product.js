import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ProductList from '../../Components/ProductList/ProductList';
import { PRODUCT } from '../../config/Server';
import './Product.scss';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productListItem: [],
    };
  }
  componentDidMount() {
    fetch(`${PRODUCT}=폴로`)
      .then((res) => res.json())
      .then((res) => this.setState({productListItem:res.PRODUCTS_LIST}));
  }
  render() {
    const {productListItem} =this.state
    console.log(this.state.productListItem);
    return (
      <>
        <Navbar />
        <div className='Product'>
          <div className='container'>
          {productListItem.map((item) => {
            return (
              <ProductList
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                discount={item.discount_rate}
                review={item.review_score_avg}
                thumbnail={item.thumbnail}
                colorCount={item.color_count}
              />
            );
          })}
            
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Product;
