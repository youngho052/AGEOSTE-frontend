import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../../config/Server";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      id: "",
      password: "",
      againpw: "",
      phone: "",
      birth: "",
      allChecked: false,
      firstCheck: false,
      secondCheck: false,
      thirdCheck: false,
    };
  }

  signupInput = (e) => {
    const { id, value } = e.target;

    this.setState({ [id]: value });
  };

  signupId = (e) => {
    const { id, username, password, phone, birth } = this.state;

    fetch(SIGN_UP, {
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: id,
        password,
        phone_number: phone,
        date_of_birth: birth,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const errorMsg = {
          EXIST_EMAIL: "중복된 이메일 입니다.",
          EXIST_PHONE_NUMBER: "사용중인 휴대폰 번호입니다.",
          KEY_ERROR: "정보를 입력해주세요",
        };

        if (result.error) return alert(errorMsg[result.error]);

        if (result.message === "SUCCESS") {
          alert("회원가입 성공!");
          this.props.history.push("./login");
        }
      });
  };

  handleAllCheck = () => {
    const { allChecked } = this.state;

    this.setState({
      firstCheck: !allChecked,
      secondCheck: !allChecked,
      thirdCheck: !allChecked,
      allChecked: !allChecked,
    });
  };

  handleCheck = (e) => {
    const { name } = e.target;

    this.setState({ [name + "Check"]: !this.state[name + "Check"] });
  };

  componentDidUpdate(_, prevState) {
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

  render() {
    const { allChecked, firstCheck, secondCheck, thirdCheck } = this.state;

    const { username, id, password, againpw, phone, birth } = this.state;

    //유효성 검사
    const checkPw = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(
      password
    );
    const checkrePw = password === againpw;
    const checkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
      id
    );
    const checkPhone = /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/.test(
      phone
    );
    const checkBirth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
      birth
    );

    return (
      <>
        <Navbar />
        <div className="Signup">
          <div className="signupContainer">
            <h1>회원가입</h1>
            <div className="Name Form">
              <div className="signForm">
                <span>이름 *</span>
              </div>
              <input
                id="username"
                className="signInput input_padding"
                type="text"
                placeholder="이름"
                onChange={this.signupInput}
              />
            </div>
            <div className="Id Form">
              <div className="signForm">
                <span>아이디 *</span>
              </div>
              <div className={`effective ${id && "sign"}`}>
                <input
                  id="id"
                  className="signInput input_padding"
                  type="text"
                  placeholder="아이디(이메일)"
                  onChange={this.signupInput}
                />
                <span className={checkEmail ? "complete" : "fail"}>
                  {checkEmail
                    ? "사용가능한 이메일형식 입니다."
                    : "잘못된 이메일형식 입니다."}
                </span>
              </div>
            </div>
            <div className="Pw Form">
              <div className="signForm">
                <span>비밀번호 *</span>
              </div>
              <div className={`effective ${password && "sign"}`}>
                <input
                  id="password"
                  className="signInput input_padding"
                  type="password"
                  placeholder="비밀번호"
                  onChange={this.signupInput}
                />
                <span className={checkPw ? "complete" : "fail"}>
                  {checkPw
                    ? "맞는 비밀번호 형식입니다."
                    : "비밀번호형식은 문자 숫자 특수문자가 하나씩 들어가야하며 8~15자 이어야 합니다."}
                </span>
              </div>
            </div>
            <div className="CheckPw Form">
              <div className="signForm">
                <span>비밀번호 확인*</span>
              </div>
              <div className={`effective ${againpw && "sign"}`}>
                <input
                  id="againpw"
                  className="signInput input_padding"
                  type="password"
                  placeholder="비밀번호 확인"
                  onChange={this.signupInput}
                />
                <span className={checkrePw ? "complete" : "fail"}>
                  {checkrePw
                    ? "비밀번호가 일치합니다."
                    : "비밀번호가 일치하지 않습니다."}
                </span>
              </div>
            </div>
            <div className="Phone Form">
              <div className="signForm">
                <span>휴대폰 번호*</span>
              </div>
              <div className={`effective ${phone && "sign"}`}>
                <input
                  id="phone"
                  className="signInput input_padding"
                  type="text"
                  placeholder="-제외 숫자만 입력(11자리)"
                  onChange={this.signupInput}
                />
                <span className={checkPhone ? "complete" : "fail"}>
                  {checkPhone
                    ? "맞는 전화번호 형식입니다."
                    : "맞지 않는 전화번호 형식입니다"}
                </span>
              </div>
              <button type="submit">인증번호 전송</button>
            </div>
            <div className="Birth Form">
              <div className="signForm">
                <span>생년월일</span>
              </div>
              <div className={`effective ${birth && "sign"}`}>
                <input
                  id="birth"
                  className="signInput input_padding"
                  type="text"
                  placeholder="숫자만 입력(8자리)"
                  onChange={this.signupInput}
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
              <div className="agreesubCheck">
                <input
                  name="first"
                  type="checkbox"
                  checked={firstCheck}
                  onChange={this.handleCheck}
                />
                <p>아거스테 서비스 이용약관(필수)</p>
              </div>
              <div className="agreesubCheck">
                <input
                  name="second"
                  type="checkbox"
                  checked={secondCheck}
                  onChange={this.handleCheck}
                />
                <p>개인정보 수집 동의(필수)</p>
              </div>
              <div className="agreesubCheck">
                <input
                  name="third"
                  type="checkbox"
                  checked={thirdCheck}
                  onChange={this.handleCheck}
                />
                <p>SMS를 통한 상품 및 이벤트 정보 수신에 동의합니다.(선택)</p>
              </div>
            </div>
            <div className="success">
              <form onSubmit={(e) => e.preventDefault(e)}>
                <Link to="/login">
                  <button className="cancle">취소</button>
                </Link>
                <button className="sign" onClick={this.signupId}>
                  회원가입
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Signup;
