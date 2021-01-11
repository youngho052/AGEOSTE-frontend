import React, { Component } from 'react';

class LoginInput extends Component{
  render(){
    return(
      <>
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
            type="password" 
            placeholder="비밀번호"
          />
        </div>
      </>
    );
  } 
}

export default LoginInput;