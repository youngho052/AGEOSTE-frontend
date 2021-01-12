import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { imgUrl, sex, name, sale_per, standard_price, color, stars } = this.props.product;
    const { starNumToArr } = this.props;

    return (
      <div className="item_container">
        <div className="item_block">
          <div className="item_img">
            <img src={imgUrl} alt="상품 이미지"/>
            <div className="item_color">{`+ ${color} ` + (color === 1 ? 'color' : 'colors')}</div>
          </div>
          <div className="item_info">
            <div className="sale_per">{`${sale_per}% 세일`}</div>
            <div className="item_name">
              <a href='#'>({sex}) {name}</a>
            </div>
            <div className="stars_container">
              <ul>
                {
                  starNumToArr(stars).map((e, index) => {
                    if (e === 0) {
                      return <li key={index}><i className="fas fa-star"></i></li>;
                    }
                    else {
                      return <li key={index}><i className="far fa-star"></i></li>;
                    }
                  })
                }
              </ul>
            </div>
            <div className="price">
              <div className="sales_price">{`${(standard_price * (1 - sale_per / 100)).toLocaleString()}원`}</div>
              <div className="standard_price">{`${Number(standard_price).toLocaleString()}원`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;