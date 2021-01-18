import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mytear.scss'

class Mytear extends Component {
  render() {
    return (
      <div className="Mytear">
        <span className="NowTear">현재등급</span>
        <img src="images/Silver.png" alt="실버등급 로고" />
        <p className="Silver">Sliver</p>
        <Link to='/' className="benefit"><p>내가 누릴 수 있는 혜택</p></Link>
        <div className="Score">
          <span className="Mileage">3,000점 입니다</span>
          <Link to='/' className="Look"><p>자세한 내 포인트를 참조하십시오</p></Link>
        </div> 
      </div>
    );
  }
}

export default Mytear;