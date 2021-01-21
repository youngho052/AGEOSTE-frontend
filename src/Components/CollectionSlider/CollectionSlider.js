import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CollectionSlider/CollectionSlider.scss';
class CollectionSlider extends Component {
  render() {
    const settings = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 2,
    };

    return (
      <div className='CollectionSlider'>
        <Slider {...settings}>
          {this.props.data.map((item) => {
            return (
              <div className='card' key={item.id}>
                <img src={item.imgUrl} alt={item.linkTitle}/>
                <h3>
                  <Link to='/'>
                    {item.linkTitle}{' '}
                    <i className='fas fa-long-arrow-alt-right'></i>
                  </Link>
                </h3>
              </div>
            );
          })}
          <div></div>
          <div></div>
        </Slider>
      </div>
    );
  }
}

export default CollectionSlider;
