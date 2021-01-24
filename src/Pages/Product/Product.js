import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ProductList from '../../Components/ProductList/ProductList';
import { PRODUCT } from '../../config/Server';
import Pageing from './Pageing/Pageing';
import './Product.scss';

const limit = 16; 
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productListItem: [],
      currentIndex: '1',
    };
  }


  componentDidMount() {
    fetch(`${PRODUCT}=폴로&page_count=${limit}&page=1`)
      .then((res) => res.json())
      .then((res) => this.setState({ productListItem: res.PRODUCTS_LIST }));
  }
  onGotoPaging = (e) => {
    const offset = e?.target.dataset.idx;
    fetch(`${PRODUCT}=폴로&page_count=${limit}&page=${offset}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productListItem: res.PRODUCTS_LIST,
          currentIndex: offset,
        })
      )
      .then(() => window.scrollTo(0, 0));
  };
  render() {
    const { productListItem,currentIndex } = this.state;
    console.log(this.state.currentIndex,'guadsfd');
    return (
      <>
        <Navbar />
        <div className='Product'>
          <div className='product__img__wrap'>
            <img src='/images/productBg.png' alt='상품 리스트 페이지 입니다.' />
            <div className='product_title'>
              <h2>
                아고스테 남성 POLO
                <span>
                  AGEOSTE 시즌 오프 세일 다양한 <br />
                  상품을 만나보세요
                </span>
              </h2>
            </div>
          </div>
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
        <Pageing paging={this.onGotoPaging} activeButton={currentIndex}/>
        <Footer />
      </>
    );
  }
}

export default Product;
