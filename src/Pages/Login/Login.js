import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../../Components/LoginInput';
import './Login.scss';
import '../../Styles/reset.scss';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="LoginContainer">
          <div className="LoginLogo">
            <h1>AGEOSTE</h1>
          </div>
          <LoginInput />
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
            <Link className="SignupPage">회원가입</Link>
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