import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tear.scss'

class Tear extends Component {
  constructor(props){
    super()

  }

  render() {
    const {image, name, point, birth, level, grades} = this.props;
    return (
      <div className="Tear">
        <div className="member">
          <img src={image} alt="티어별 이미지" />
          <p>{name}</p>
          <span>자격요건: {grades}</span>
          <span>적립률: {point}</span>
          <span>생일쿠폰: {birth}</span>
          <span>레벨업그레이드: {level}</span>
          <div className="more">
            <button><Link to='/'>+더 보기</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Tear;