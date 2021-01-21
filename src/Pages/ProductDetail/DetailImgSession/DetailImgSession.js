import React, { Component } from 'react';
import '../DetailImgSession/DetailImgSession.scss';

class DetailImgSession extends Component {
  render() {
    const { productImg, productName, description, code } = this.props;
		const [desc, ...features] = description.split("@")
    
    return (
      <div className='DetailImgSession'>
        <div className='product__explanation'>
          <h2>상세히 보기</h2>
          <span className='product__code'>{code}</span>
          <p>{desc}</p>
          <ul className='material'>{features.map((feature, idx) => <li key={idx}>- {feature}</li>)}</ul>
        </div>
        <img src={productImg} alt={productName} />
      </div>
    );
  }
}

export default DetailImgSession;
