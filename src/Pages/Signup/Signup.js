import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SERVER_SIGNUP } from './Data/Config';
import './Signup.scss';

class Signup extends Component{
  constructor(){
    super();
    this.state = {
      id: "",
      password: "",
      againpw: "",
      username: "",
      phone: "",
      birth: "",
      allChecked: false,
      name: "",
      check: false,
    };
  }

  Nameinput = (e) => {
    this.setState({ username : e.target.value})
  }

  Idinput = (e) => {
    this.setState({ id : e.target.value});
  }

  Pwinput = (e) => {
    this.setState({ password : e.target.value});
  }

  Againpwinput = (e) => {
    this.setState({againpw : e.target.value})
  }

  Phoneinput = (e) => {
    this.setState({ phone : e.target.value});
  }

  Birthinput = (e) => {
    this.setState({ birth : e.target.value});
  }

  SignupId = (e) => {
    const { id, username, password, phone, birth} = this.state;

    fetch(SERVER_SIGNUP, {
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: id,
        password: password,
        phone_number: phone,
        date_of_birth: birth,
      })
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);

        if(result.error === "EXIST_EMAIL") {
          alert('중복된 이메일 입니다.')
          return;
        }

        if(result.error === "EXIST_PHONE_NUMBER") {
          alert('사용중인 휴대폰 번호입니다.')
          return;
        }
        if(result.message === "SUCCESS") {
          alert('회원가입 성공!')
          this.props.history.push('./main')
        }
      })
  }

  handleAllCheck = () =>{
    const { allChecked }= this.state;
    if(allChecked === true){
      this.setState({
        // firstChecked: false,
        // secondChecked: false,
        // thirdChecked: false,
        check: false,
        allChecked: false,
      });
    } else {
      this.setState({
        // firstChecked: true,
        // secondChecked: true,
        // thirdChecked: true,
        check: true,
        allChecked: true,
      });
    }  
  };

  handleCheck = e => {
    
    const { id } = e.target;
    if(id ==="firstCheck"){
      this.setState({check: !this.state.check});
      return;
    }
    
    // this.setState({
    //   check: !this.state.check
    // })
    // console.log(name === 'firstCheck', checked);
  }

 
  // FirsthandleCheck = () => {
  //   this.setState({
  //     FirstCheck: !this.state.FirstCheck,
  //   });
  // };
  // SecondhandleCheck = () => {
  //   this.setState({
  //     SecondCheck: !this.state.SecondCheck,
  //   });
  // };
  // ThirdhandleCheck = () => {
  //   this.setState({
  //     ThirdCheck: !this.state.ThirdCheck,
  //   });
  // };

  componentDidUpdate(prevProps, prevState) {
    const { firstCheck, secondCheck, thirdCheck } = this.state;
    let prevtruecnt = 0,
        curtruecnt = 0;
    if (prevState.firstCheck) prevtruecnt++;
    if (prevState.secondCheck) prevtruecnt++;
    if (prevState.thirdCheck) prevtruecnt++;

    if (firstCheck) curtruecnt++;
    if (secondCheck) curtruecnt++;
    if (thirdCheck) curtruecnt++;

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
    const { allChecked, check } = this.state;
    
    const {id, password, phone, username, birth, againpw} = this.state;
   
    //유효성 검사
    const checkPw = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(password);
    const checkrePw = password === againpw;
    const checkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(id);
    const checkPhone =  /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/.test(phone);
    const checkBirth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(birth);
    
    console.log({id, password, phone, username});
    return(
      <div className="Signup">
        <div className="SignupContainer">
        <h1>회원가입</h1>
          <div className="Name Form">
            <div className="nameForm SignForm">
              <span>이름 *</span>
            </div>
            <input
              className="nameInput input__padding" 
              type="text"
              placeholder="이름"
              onChange={this.Nameinput}
            />
          </div>
          <div className="Id Form">
            <div className="idForm SignForm">
              <span>아이디 *</span>
            </div>
            <div className={`effective ${id && "success"}`}>
              <input 
                className="idInput input__padding"
                type="text"
                placeholder="아이디(이메일)"
                onChange={this.Idinput}
              />
              <span className={checkEmail ? "complete" : "fail"}>
                {checkEmail ? "사용가능한 이메일형식 입니다." : "잘못된 이메일형식 입니다."}
              </span>
            </div>
          </div>
          <div className="Pw Form">
            <div className="pwForm SignForm">
              <span>비밀번호 *</span>
            </div>
            <div className={`effective ${password && "success"}`}>
              <input 
                className="pwInput input__padding"
                type="password" 
                placeholder="비밀번호"
                onChange={this.Pwinput}
              />
              <span className={checkPw ? "complete" : "fail"}>
                {checkPw ? 
                  "맞는 비밀번호 형식입니다." 
                  : "비밀번호형식은 문자 숫자 특수문자가 하나씩 들어가야하며 8~15자 이어야 합니다."}
              </span>                   
            </div>
          </div>
          <div className="CheckPw Form">
            <div className="pwForm SignForm">
              <span>비밀번호 확인*</span>
            </div>
            <div className={`effective ${againpw && "success"}`}>
              <input 
                className="againpwInput input__padding"
                type="password" 
                placeholder="비밀번호 확인"
                onChange={this.Againpwinput}
              />
              <span className={checkrePw ? "complete" : "fail"}>
                {checkrePw ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."}
              </span>
            </div>
          </div>
          <div className="Phone Form">
            <div className="phoneForm SignForm">
              <span>휴대폰 번호*</span>
            </div>
            <div className={`effective ${phone && "success"}`}>
              <input 
                className="phoneInput input__padding"
                type="text" 
                placeholder="-제외 숫자만 입력(11자리)"
                onChange={this.Phoneinput}
              />
              <span className={checkPhone ? "complete" : "fail"}>
                {checkPhone ? "맞는 전화번호 형식입니다." : "맞지 않는 전화번호 형식입니다"}
              </span>
            </div>
            <button type="submit">인증번호 전송</button>
          </div>
          <div className="Birth Form">
            <div className="birthForm SignForm"> 
              <span>생년월일</span>
            </div>
            <div className={`effective ${birth && "success"}`}>
              <input 
                className="BirthInput input__padding" 
                type="text"
                placeholder="숫자만 입력(8자리)"
                onChange={this.Birthinput}
              />
              <span className={checkBirth ? "complete" : "fail"}>
                {checkBirth ? "맞는 형식 입니다." : "맞지 않는 형식입니다."}
              </span>
            </div>
          </div>
          <div className="Agree">
            <h2>약관 동의</h2>
            <div className="agreeCheck">
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
                id="firstCheck"
                type="checkbox"
                checked={check}
                onChange={this.handleCheck}
              />
              <p>아거스테 서비스 이용약관(필수)</p>
            </div>
            <div className="AgreeSubCheck">
              <input 
                id="secondCheck"
                type="checkbox"
                checked={check}
                onChange={this.handleCheck}
              />
              <p>개인정보 수집 동의(필수)</p>
            </div>
            <div className="AgreeSubCheck">
              <input 
                id="thirdCheck"  
                type="checkbox"
                checked={check}
                onChange={this.handleCheck}
              />
              <p>SMS를 통한 상품 및 이벤트 정보 수신에 동의합니다.(선택)</p>
            </div>
          </div>
          <div className="Success">
            <Link to="/login"><button className="Cancle">취소</button></Link>
              <button 
                className="Sign"
                onClick={this.SignupId}
              >
                회원가입
              </button>
          </div>
        </div>
      </div>
    );
  } 
}

export default Signup;