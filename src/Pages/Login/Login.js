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
        <h1>로그인</h1>
        <div className="LoginContainer"> 
          <div className="LoginCont">
            <h1>AGEOSTE 통합회원</h1>
            <div className="LoginForm">
              <label>
                <i className="far fa-user" id="idIcon"/>
              </label>
              <input 
                type="text"
                className="idInput input__padding"
                placeholder="아이디"
              />
            </div>
            <div className="PwForm">
              <label className="pwIcon">
                <i className="fas fa-lock" id="pwIcon"/>
              </label>
              <input 
                type={hiddenPw ? "password" : "text"}
                className="pwInput input__padding"
                placeholder="비밀번호"
              />
              <label className="show" onClick={this.showPassword}>
                <i key={icon}>
                  <span className={icon} />
                </i>
              </label>
            </div>
            <div className="Remember">
              <div className="RememberId">
                <input 
                  type="checkbox" 
                />
                <span>아이디저장</span>
              </div>
              <div className="ForgetPw">
                <Link to='/'><span>비밀번호를 잊으셨나요?</span></Link>
              </div>
            </div>
            <div className="LoginButton">
              <button>로그인</button>
            </div>
          </div>
          <div className="SignupCont">
            <div className="SignupForm">
              <h1>아직 AGEOSTE 회원이 아니신가요?</h1>
              <div className="benifit">
                <span>지금 AGEOSTE에 회원가입하시면</span>
                <span>다양한 멤버쉽 혜택을 누리실 수 있습니다.</span>
              </div>
              <img src="images/Membership.png" className="Logo" alt="아거스테 로고" />
              <div className="SignupBtn">
                <Link to='/signup'><button>회원가입</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default Login;