import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../Components/Navbar/Navbar';

import { PRODUCT_DETAIL, PRODUCT_LIST, SERVER } from '../../config/Server';
import ProductSize from './ProductSize/ProductSize';
import ProductPriceAndRating from './ProductPriceAndRating/ProductPriceAndRating';
import DetailImgSession from './DetailImgSession/DetailImgSession';
import '../ProductDetail/ProductDetail.scss';
import ProductListSlider from '../../Components/ProductListSlider/ProductListSlider';
import ProductDetailCart from './ProductDetailCart/ProductDetailCart';
import Footer from '../../Components/Footer/Footer';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
      productList: [],
      desc: [],
      productId: '',
      size: '',
      colorId: '',
      imageId: '',
      toggle: false,
      meassage: false,
    };
  }

  componentDidMount = () => {
    fetch(`${PRODUCT_DETAIL}/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ productDetail: res.product }))
      .then(() => window.scrollTo(0, 0));
    fetch(`${PRODUCT_LIST}`)
      .then((res) => res.json())
      .then((res) => this.setState({ productList: res.PRODUCTS_LIST }));
  };

  componentDidUpdate = (prevProps, _) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`${PRODUCT_DETAIL}/${this.props.match.params.id}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            productDetail: res.product,
            toggle: false,
            meassage: false,
          })
        )
        .then(() => window.scrollTo(0, 0));
    }
  };
  onhandleToggle = (id, color) => {
    const { size } = this.state;
    if (size === '') {
      alert('사이즈를 선택해주세요');
      return;
    }

    this.setState({ toggle: !this.state.toggle });
    this.onSetItem(id, color);
  };

  onChangeSize = (e) => {
    this.setState({
      size: Number(e.target.value),
    });
  };
  onSetItem = (id, color) => {
    this.setState({
      productId: id,
      colorId: color[0].color_id,
      imageId: color[0].img[0].color_image_id,
    });
  };
  onSubmit = () => {
    const { productId, size, colorId, imageId } = this.state;
    fetch(`${SERVER}/order/cart`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMn0.MvbM5ZJG5RDlzXuV6OUhpHZJb0KUE8djPpDDAR5hnzU',
      },
      method: 'POST',
      body: JSON.stringify({
        product_id: productId,
        size_id: size,
        color_id: colorId,
        image_id: imageId,
      }),
    }).then(() => this.setState({ meassage: !this.state.meassage }));
    setTimeout(() => {
      this.setState({
        toggle:!this.state.toggle
      })
      }, 3000) 
      
      
  
  };
  render() {
    const {
      id,
      colors,
      name,
      code,
      review_score_avg,
      price,
      discount_rate,
      description,
    } = this.state.productDetail;
    const { productList, toggle, meassage, size } = this.state;
    return (
      <>
        <Navbar />
        <div className='ProductDetail'>
          <div className='detail__wrap'>
            <img src={colors && colors[0].img[0].color_image_url} alt={name} />
            <div className='detail__content'>
              <ProductPriceAndRating
                discount={discount_rate}
                price={price}
                name={name}
                rating={review_score_avg}
              />
              <div className='colorSelect'>
                <p>2 개의 색상</p>
                <Link />
                <Link />
              </div>
              <ProductSize onChangeSize={this.onChangeSize} productId={id} />
              <button
                type='button'
                className='shopingCart'
                onClick={() => this.onhandleToggle(id, colors)}>
                {size === '' ? '사이즈 선택하기' : '사이즈 선택 완료하기'}
              </button>
              <p className='transfrom'>
                당일배송은 서울지역, 월~금요일 오후 12시까지
                선택가능(공휴일/주말 제외) 재고부족 시, 사이즈 선택이
                가능하더라도 장바구니에 제품을 담을 수 없습니다
              </p>
            </div>
          </div>
          {!!this.state.productDetail.name && (
            <DetailImgSession
              productImg={colors[0].img[1].color_image_url}
              productName={name}
              description={description}
              code={code}
            />
          )}
          <ProductListSlider productListItem={productList} />
        </div>
        {!!this.state.productDetail.name && (
          <ProductDetailCart
            imgUrl={colors[0].img[0].color_image_url}
            productImgId={colors[0].img[1].color_id}
            productName={name}
            description={description}
            price={price}
            code={code}
            size={size}
            discount={discount_rate}
            toggle={toggle}
            meassage={meassage}
            onSubmit={this.onSubmit}
            onhandleToggle={() => this.onhandleToggle(id, colors)}
          />
        )}
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
