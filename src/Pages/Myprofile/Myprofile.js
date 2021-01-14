import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tear from './Components/Tear';
import Mytear from './Components/Mytear';
import './Myprofile.scss';

const NavCotent = [
  {id: 0, name:'내 프로필'},
  {id: 1, name:'맴버십혜택'},
  {id: 2, name:'주문/배송조희'},
  {id: 3, name:'내 쿠폰'},
  {id: 4, name:'고객센터'},
]

const Information = [
  {name: "내 라코스테 부티크", content: "자주 찾는 부티크를 추가해주세요", link: "+부티크 추가하기"},
  {name: "주소록", content: "알려진 주소가 없습니다", link: "+새로운 주소 추가하기"},
]

class Myprofile extends Component {
  constructor() {
    super()
    this.state = {
      gradeList: [],
      UserList: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json', {})
      .then(response => response.json())
      .then(data => {
        this.setState({
          gradeList : data,
        })
      })

    fetch('http://localhost:3000/data/UserData.json', {})
      .then(response => response.json())
      .then(result => {
        this.setState({
          UserList : result,
        })
      })
  }

  render() {
    const { gradeList, UserList } = this.state;
    
    return (
      <div className="Myprofile">
        <div className="Profile">
          <div className="intro">
            <div className="Welcome">
              <p><span>안녕하세요 {}</span> 님 마이페이지에 오신 것을 환영합니다.</p>
            </div>
            <div className="logo">
              <img src="images/logo.png" alt="아거스테 로고" />
            </div>
          </div>
          <div className="Navbar">
            <ul className="Nav">
              {NavCotent.map((el, index) => {
                return(
                  <li className="Menu" key={index}>{el.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="Membership">
            <Mytear />
            <div className="Tear">
              {gradeList.map((grade, index) =>{
                return(
                  <Tear 
                    key={index}
                    image={grade.image}
                    name={grade.name}
                    point={grade.point}
                    birth={grade.birth}
                    level={grade.levelup}
                    grades={grade.tear}
                  />
                )
              })}
            </div>
          </div>
          <div className="InfoCont">
            <div className="UserInfo">
              {UserList.map((user, index) => {
                return(
                  <>
                    <ul key={index}>
                      <li>내정보</li>
                      <li>성명: {user.name}</li>
                      <li>이메일: {user.email}</li>
                      <li>생년월일: {user.birth}</li>
                      <li>전화번호: {user.phone}</li>
                      <li>비밀번호: {user.password}</li>
                    </ul>
                    <Link to='/'><span>수정</span></Link>
                  </>
                )
              })}
            </div>
            <div className="SecondCont">
              {Information.map((info, index) => {
                return (
                  <div className="Cont">
                    <h1>{info.name}</h1>
                    <span>{info.content}</span>
                    <Link className="link" to='/'>{info.link}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Myprofile;