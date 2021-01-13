import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import '../../Styles/reset.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      hiddenPw: true
    }
  }

  showPassword = () => {
    this.setState({hiddenPw : !this.state.hiddenPw});
  }

  render() {
    const {hiddenPw} = this.state;
    const icon = hiddenPw ? "fas fa-eye-slash" : "fas fa-eye";

    return (
      <div className="Login">
        <div className="LoginContainer">
          <div className="LoginLogo">
            <h1>로그인</h1>
          </div>
          <div className="IdForm">
          <input
            className="IdInput" 
            type="text" 
            placeholder="아이디(이메일)" 
          />
        </div>
        <div className="PwForm">
          <input
            className="PwInput"
            type={hiddenPw ? "password" : "text"}
            placeholder="비밀번호"
          />
          <div className="show" onClick={this.showPassword}>
            <i key={icon}>
              <span className={icon} />
            </i>
          </div>     
        </div>
          <div className="LoginButton">
            <button
              id="LoginBtn"
              type="submit" 
            >
              로그인
            </button>
          </div>
          <div className="SignUp">
            <span>처음이신가요?</span>
            <Link to="/signup" className="SignupPage">회원가입</Link>
          </div>
          <div className="Forget">
            <span>아이디(이메일) 비밀번호를 잊으셨나요?</span>
            <Link className="ForgetId">아이디(이메일) 비밀번호 찾기</Link>
          </div>
        </div>
      </div>  
    );
  }
}

export default Login;