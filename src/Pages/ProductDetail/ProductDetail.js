import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import './ProductDetail.scss'

class ProductDetail extends Component {

  starNumToArr = (starNum) => {
    const num = new Array(5);
    num.fill(0, 0, starNum).fill(1, starNum);
    return num;
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="ProductDetail">
          <div className="top_info_block">
            <div className="img_block_915">
              <img src="http://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dwbb6adebc/BH1966-20D_CY9_20.jpg?imwidth=915&impolicy=product" />
            </div>
            <div className="top_info">
              <div className="sale_per">30% 세일</div>
              <h1>(남성) 경량 방수 숏 패딩 자켓</h1>
              <div className="stars_container">
                <ul>
                  {
                    this.starNumToArr(5).map((e, index) => {
                      return <li key={index}><i className={`${e === 0 ? 'fas' : 'far'} fa-star`}></i></li>;
                    })
                  }
                </ul>
                <button>(1개의 리뷰)</button>
              </div>
              <div className="size_guide_container">
                <button className="size_guide"><i class="fas fa-tshirt"></i>사이즈 가이드</button>
              </div>
              <button className="size_select">사이즈 선택하기</button>
              <button className="add_cart">쇼핑백에 추가하기</button>
              <div className="notification">
                <i class="fas fa-truck"></i>
                <span>당일배송은 서울지역, 월~금요일 오후 12시까지 선택가능(공휴일/주말 제외)재고부족 시, 사이즈 선택이 가능하더라도 장바구니에 제품을 담을 수 없습니다.</span>
              </div>
            </div>
          </div>
          <div className="detail_info_block">
            <div className="detail_info"></div>
            <div className="img_block_915">
              <img src="http://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dwcfbce51f/BH1966-20D_CY9_21.jpg?imwidth=915&impolicy=product" />
            </div>
          </div>
          <div className="product_img_block">
            <div className="img_block_840">
              <img src="http://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw4eadefa7/BH1966-20D_CY9_22.jpg?imwidth=840&impolicy=product" />
            </div>
            <div className="img_block_840">
              <img src="http://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dwc4bb5ca0/BH1966-20D_CY9_23.jpg?imwidth=840&impolicy=product" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetail;