import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { imgUrl, sex, name, sale_per, standard_price, color, stars } = this.props.product;
    const { starNumToArr } = this.props;

    return (
      <div className="Product">
        <div className="product_block">
          <div className="product_img">
            <img src={imgUrl} alt="상품 이미지"/>
            <div className={ color ? "product_color" : "dpn"}>{`+ ${color} ${color === 1 ? 'color' : 'colors'}`}</div>
          </div>
          <div className="product_info">
            <div className={sale_per ? "sale_per" : "dpn"}>{`${sale_per}% 세일`}</div>
            <div className="product_name">
              <Link href='#'>({sex}) {name}</Link>
            </div>
            <div className={ stars ? "stars_container" : "dpn" }>
              <ul>
                {
                  starNumToArr(stars).map((e, index) => {
                    return <li key={index}><i className={`${ e === 0 ? 'fas' : 'far'} fa-star`}></i></li>;
                  })
                }
              </ul>
            </div>
            <div className="price">
              <div className={sale_per ? "sales_price" : "dpn"}>{`${(standard_price * (1 - sale_per / 100)).toLocaleString()}원`}</div>
              <div className={sale_per ? "standard_price" : "no_sale"}>{`${Number(standard_price).toLocaleString()}원`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;