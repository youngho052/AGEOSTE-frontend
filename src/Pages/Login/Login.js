import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SIGN_IN } from "./Data/config";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      showPw: true,
    };
  }

  CheckPassword = () => {
    this.setState({ showPw: !this.state.showPw });
  };

  LoginInput = (e) => {
    const { id, value } = e.target;

    this.setState({ [id]: value });
  };

  LoginButton = () => {
    const { id, password } = this.state;

    fetch(SIGN_IN, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const errorMsg = {
          INVALID_EMAIL: "아이디가 잘못 입력 됬습니다.",
          INVALID_PASSWORD: "비밀번호를 잘못 입력 하셨습니다.",
        };

        if (result.error) return alert(errorMsg[result.error]);

        if (result.message === "SUCCESS") {
          localStorage.setItem("token", result.token);
          alert("로그인 성공!");
          this.props.history.push("/main");
        }
      });
  };

  render() {
    const { id, password, showPw } = this.state;
    const icon = showPw ? "fas fa-eye-slash" : "fas fa-eye";

    return (
      <>
        <Navbar />
        <div className="Login">
          <h1>로그인</h1>
          <div className="loginContainer">
            <div className="loginCont">
              <h1>AGEOSTE 통합회원</h1>
              <div className="loginForm">
                <label>
                  <i className="idIcon far fa-user" />
                </label>
                <input
                  id="id"
                  type="text"
                  className="idInput input__padding"
                  placeholder="아이디"
                  value={id}
                  onChange={this.LoginInput}
                />
              </div>
              <div className="pwForm">
                <label>
                  <i className="pwIcon fas fa-lock" />
                </label>
                <input
                  id="password"
                  type={showPw ? "password" : "text"}
                  className="pwInput input__padding"
                  placeholder="비밀번호"
                  value={password}
                  onChange={this.LoginInput}
                />
                <label className="show" onClick={this.CheckPassword}>
                  <i key={icon}>
                    <span className={icon} />
                  </i>
                </label>
              </div>
              <div className="remember">
                <div className="rememberId">
                  <input type="checkbox" />
                  <span>아이디저장</span>
                </div>
                <div className="forgetPw">
                  <Link to="/">
                    <span>비밀번호를 잊으셨나요?</span>
                  </Link>
                </div>
              </div>
              <form
                className="loginButton"
                onSubmit={(e) => e.preventDefault(e)}
              >
                <button onClick={this.LoginButton}>로그인</button>
              </form>
            </div>
            <div className="signupCont">
              <div className="signupForm">
                <h1>아직 AGEOSTE 회원이 아니신가요?</h1>
                <div className="benifit">
                  <span>지금 AGEOSTE에 회원가입하시면</span>
                  <span>다양한 멤버쉽 혜택을 누리실 수 있습니다.</span>
                </div>
                <img
                  alt="아거스테 로고"
                  src="images/Membership.png"
                  className="Logo"
                />
                <div className="SignupBtn">
                  <Link to="/signup">
                    <button>회원가입</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>sadsadsadsa</div>
        <Footer />
      </>
    );
  }
}

export default Login;
