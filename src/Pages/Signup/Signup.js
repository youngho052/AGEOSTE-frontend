import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SERVER, SERVER_SIGNUP } from '../../Components/Config'
import './Signup.scss';

class Signup extends Component{
  constructor(){
    super();
    this.state = {
      id: "",
      password: "",
      username: "",
      phone: "",
      birth: "",
      allChecked: false,
      FirstCheck: false,
      SecondCheck: false,
      ThirdCheck: false,
    };
  }

  Nameinput = (e) => {
    this.setState({ username : e.target.value})
  }

  Idinput = (e) => {
    this.setState({ id : e.target.value});

    // const { id } = this.state;
    // if(!id.includes('@')){
    //   alert("이메일 형식이 맞지 않습니다.")
    // }
    
  }

  Pwinput = (e) => {
    this.setState({ password : e.target.value});
  }

  Phoneinput = (e) => {
    this.setState({ phone : e.target.value});
  }

  Birthinput = (e) => {
    this.setState({ birth : e.target.value});
  }

  checkId = (e) => {
    const { id, username, password, phone} = this.state;

    fetch(SERVER_SIGNUP, {
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: id,
        password: password,
        phone_number: phone,
      })
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
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
    const {id, password, phone, username, birth} = this.state;

    const checkPw = password.length > 8;

    console.log(id, password, phone, username);
    return(
      <div className="Signup">
        <div className="SignupContainer">
        <h1>회원가입</h1>
          <div className="Name Form">
            <div className="nameForm SignForm">
              <span>이름 *</span>
            </div>
            <input
              className="NameInput input__padding" 
              type="text"
              placeholder="이름"
              onChange={this.Nameinput}
            />
          </div>
          <div className="Id Form">
            <div className="idForm SignForm">
              <span>아이디 *</span>
            </div>
            <input 
              className="IdInput input__padding"
              type="text"
              placeholder="아이디(이메일)"
              onChange={this.Idinput}
            />
            <button 
              type="submit"
            >
              중복확인
            </button>
          </div>
          <div className="Pw Form">
            <div className="pwForm SignForm">
              <span>비밀번호 *</span>
            </div>
            <input 
              className="PwInput input__padding"
              type="password" 
              placeholder="비밀번호"
              onChange={this.Pwinput}
            />
            <p>{(!checkPw) ? 'b' : 'a' }</p>
          </div>
          <div className="CheckPw Form">
            <div className="pwForm SignForm">
              <span>비밀번호 확인*</span>
            </div>
            <input 
              className="PwInput input__padding"
              type="password" 
              placeholder="비밀번호 확인"
            />
          </div>
          <div className="Phone Form">
            <div className="phoneForm SignForm">
              <span>휴대폰 번호*</span>
            </div>
            <input 
              className="PhoneInput input__padding"
              type="text" 
              placeholder="-제외 숫자만 입력(11자리)"
              onChange={this.Phoneinput}
            />
            <button type="submit">인증번호 전송</button>
          </div>
          <div className="Birth Form">
            <div className="birthForm SignForm"> 
              <span>생년월일</span>
            </div>
            <input 
              className="BirthInput input__padding" 
              type="text"
              placeholder="숫자만 입력(8자리)"
              onChange={this.Birthinput}
            />
          </div>
          <div className="Agree">
            <h2>약관 동의</h2>
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
            <Link to="/main">
              <button 
                className="Sign"
                onClick={this.checkId}
              >
                회원가입
              </button></Link>
          </div>
        </div>
      </div>
    );
  } 
}

export default Signup;