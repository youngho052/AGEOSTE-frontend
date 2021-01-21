import React, { Component } from 'react';
import Slider from 'react-slick';

import ProductList from '../ProductList/ProductList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../ProductListSlider/ProductListSlider';


class ProductListSlider extends Component {

  render() {
    const settings = {
      dots:true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    const { productListItem } = this.props;
  
    return (
      <div className='ProductListSlider'>
        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}

export default ProductListSlider;
