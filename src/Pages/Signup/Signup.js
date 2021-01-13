import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

class Signup extends Component{
  constructor(){
    super();
    this.state = {
      allChecked: false,
      FirstCheck: false,
      SecondCheck: false,
      ThirdCheck: false,
    };
  }

  handleAllCheck = () =>{
    const { allChecked }= this.state;
    if(allChecked === true){
      this.setState({
        FirstCheck: false,
        SecondCheck: false,
        ThirdCheck: false,
        allChecked: false,
      });
    } else {
      this.setState({
        FirstCheck: true,
        SecondCheck: true,
        ThirdCheck: true,
        allChecked: true,
      });
    }  
  };

  FirsthandleCheck = () => {
    this.setState({
      FirstCheck: !this.state.FirstCheck,
    });
  };
  SecondhandleCheck = () => {
    this.setState({
      SecondCheck: !this.state.SecondCheck,
    });
  };
  ThirdhandleCheck = () => {
    this.setState({
      ThirdCheck: !this.state.ThirdCheck,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { FirstCheck, SecondCheck, ThirdCheck } = this.state;
    let prevtruecnt = 0,
        curtruecnt = 0;
    if (prevState.FirstCheck) prevtruecnt++;
    if (prevState.SecondCheck) prevtruecnt++;
    if (prevState.ThirdCheck) prevtruecnt++;

    if (FirstCheck) curtruecnt++;
    if (SecondCheck) curtruecnt++;
    if (ThirdCheck) curtruecnt++;

    if (prevtruecnt < 3 && curtruecnt === 3) {
      this.setState({
        allChecked: true,
      });
    }
    if (prevtruecnt === 3 && curtruecnt < 3) {
      this.setState({
        allChecked: false,
      });
    }
  }

  render(){
    const { allChecked, FirstCheck, SecondCheck, ThirdCheck } = this.state;

    return(
      <div className="Signup">
        <div className="SignupContainer">
          <h1>회원가입</h1>
          <div className="Name">
            <span>이름 *</span>
            <input
              className="NameInput" 
              type="text"
              placeholder="이름"
            />
          </div>
          <div className="Id">
            <span>아이디 *</span>
            <input 
              className="IdInput"
              type="text"
              placeholder="아이디(이메일)" 
            />
            <button type="submit">중복확인</button>
          </div>
          <div className="Pw">
            <span>비밀번호 *</span>
            <input 
              className="PwInput"
              type="password" 
              placeholder="비밀번호"
            />
          </div>
          <div className="PwModify">
            <p>* 비밀번호는 8자 이상이며/문자/숫자/특수문자가 포함되어야 합니다.</p>
            <p>* 아이디와 동일한 비밀번호는 사용할 수 없습니다.</p>
          </div>
          <div className="CheckPw">
            <span>비밀번호 확인*</span>
            <input 
              className="PwInput"
              type="password" 
              placeholder="비밀번호 확인"
            />
          </div>
          <div className="Phone">
            <span>휴대폰 번호*</span>
            <input 
              className="PhoneInput"
              type="text" 
              placeholder="-제외 숫자만 입력(11자리)"
            />
            <button type="submit">인증번호 전송</button>
          </div>
          <div className="Birth">
            <span>생년월일</span>
            <input 
              className="BirthInput" 
              type="text"
              placeholder="숫자만 입력(8자리)"
            />
          </div>
          <div className="Agree">
            <h1>약관 동의</h1>
            <div className="AgreeCheck">
              <input 
                type="checkbox" 
                name="check"
                checked={allChecked}
                onChange={this.handleAllCheck}
              />
              <p>아거스테 회원가입 약관 모두동의</p>
            </div>
            <div className="AgreeSubCheck">
              <input 
                type="checkbox"
                checked={FirstCheck}
                onChange={this.FirsthandleCheck}
              />
              <p>아거스테 서비스 이용약관(필수)</p>
            </div>
            <div className="AgreeSubCheck">
              <input 
                type="checkbox"
                checked={SecondCheck}
                onChange={this.SecondhandleCheck}
              />
              <p>개인정보 수집 동의(필수)</p>
            </div>
            <div className="AgreeSubCheck">
              <input 
                type="checkbox"
                checked={ThirdCheck}
                onChange={this.ThirdhandleCheck}
              />
              <p>SMS를 통한 상품 및 이벤트 정보 수신에 동의합니다.(선택)</p>
            </div>
          </div>
          <div className="Success">
            <Link to="/login"><button className="Cancle">취소</button></Link>
            <Link to="/main"><button className="Sign">회원가입</button></Link>
          </div>
        </div>
      </div>
    );
  } 
}

export default Signup;