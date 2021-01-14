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
          <div className="Logincont">
            <h1>Login</h1>
          </div>
          <div className='IdForm'>
            <i class="far fa-user" id="IdIcon" />
            <input 
              type="text"
              className="IdInput"
              placeholder="아이디"
            />
          </div>
          <div className='PwForm'>
            <i class="fas fa-lock" id="PwIcon"/>
            <input
              className="PwInput"
              type={hiddenPw ? "password" : "text"}
              placeholder="비밀번호"
            /> 
          </div>
          <div className="show" onClick={this.showPassword}>
            <i key={icon}>
              <span className={icon} />
            </i>
          </div>
          <div className="Remember">
            <div className="RememberId">
              <input 
                type="checkbox" 
              />
              <span>Remember ID</span>
            </div>
            <div className="ForgetPw">
              <Link to='/'><span>Forget Password?</span></Link>
            </div>
          </div>
          <div className="LoginButton">
            <button>Login</button>
          </div>
          <div className="SignUp">
            <h1>OR</h1>
            <Link to='/'><p>Sign up</p></Link>
          </div>
        </div>
      </div>  
    );
  }
}

export default Login;