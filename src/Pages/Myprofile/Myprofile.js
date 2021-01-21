import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Tear from './Components/Tear';
// import Mytear from './Components/Mytear';
import { SERVER_ACCOUNT, SERVER_AUTH } from './Data/config';
import './Myprofile.scss';

const NAV_CONTENT = [
  {id: 0, name:'내 프로필'},
  {id: 1, name:'맴버십혜택'},
  {id: 2, name:'주문/배송조희'},
  {id: 3, name:'내 쿠폰'},
  {id: 4, name:'고객센터'},
]

const INFORMATION = [
  {name: "내 라코스테 부티크", content: "자주 찾는 부티크를 추가해주세요", link: "+부티크 추가하기"},
  {name: "주소록", content: "알려진 주소가 없습니다", link: "+새로운 주소 추가하기"},
]

class Myprofile extends Component {
  constructor() {
    super()
    this.state = {
      gradeList: [],
      userInfo: [],
    }
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => this.setState({gradeList : result}))

    fetch(SERVER_ACCOUNT, {
      method: 'GET',
      headers : {
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMn0.MvbM5ZJG5RDlzXuV6OUhpHZJb0KUE8djPpDDAR5hnzU'
      }})
        .then(res => res.json())
        .then(result => {
          this.setState({userInfo : result.accounts})
        })   
  }
  
  authHandle = (e) => {
    const email = this.state.userInfo.email;

    if(this.state.userInfo.is_active) {
      return;
    }

    fetch(SERVER_AUTH,{
      method: 'POST',
      body : JSON.stringify({
        email: email,
      }),
    })
      .then(res => res.json())
      .then(result => {
        this.setState({email : result})
        if(result.message === "SUCCESS"){
          alert("인증메일 전송하였습니다.")
        }
      })
  }

  render() {
    const { gradeList, userInfo} = this.state;
    console.log(userInfo.is_active)

    return (
      <div className="Myprofile">
        <div className="profile">
          <div className="intro">
            <div className="welcome">
              <p><span>안녕하세요 {userInfo.name}</span> 님 마이페이지에 오신 것을 환영합니다.</p>
            </div>
            <div className="logo">
              <img src="images/logo.png" alt="아거스테 로고" />
            </div>
          </div>
          <div className="navBar">
            <ul className="nav">
              {NAV_CONTENT.map((el, index) => {
                return(
                  <li className="menu" key={index}>{el.name}</li>
                )
              })}
            </ul>
          </div>
          <div className='Membership'>
            {gradeList.map((grade) =>{
              return(
                <div className="Tear">
                  {!!userInfo.membership && (<div className={`member ${userInfo.membership.grade === grade.membership && 'true'}`}>
                    <img src={grade.image} alt="티어별 이미지" />
                    <span>{grade.name}</span>
                    <span>자격요건: {grade.tear}</span>
                    <span>적립률: {grade.point}</span>
                    <span>생일쿠폰: {grade.birth}</span>
                    <span>레벨업그레이드: {grade.levelup}</span>
                  </div>)}
                  <div className="more">
                    <button><Link to='/'>+더 보기</Link></button>
                  </div>
                </div>     
              )
            })}
          </div>
          <div className="infoCont">
            <div className="userInfo">
              <h1>내정보</h1>
              <div className="info">
                <p>이름: {userInfo.name}</p>
                <div className="auth">
                  <div className="myAuth">
                    <p>이메일: {userInfo.email}</p>
                    <span className={`authEmail ${userInfo.is_active && 'true'}`}>
                    { userInfo.is_active ? '인증완료' : '인증되지 않은 메일입니다.' }
                    </span>
                  </div>
                  <button onClick={this.authHandle}>
                    인증받기
                  </button>
                </div>
                <p>휴대폰 번호: {userInfo.phone_number}</p>
                <p>생일: {userInfo.date_of_birth === null ? '없다' : userInfo.date_of_birth}</p>
              </div>
            </div>
            <div className="secondCont">
              {INFORMATION.map((info) => {
                return (
                  <div className="cont">
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