import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import InputForm from "./Components/Input/Input";
import { INPUT_DATA } from "./Data/inputData";
import { SIGN_IN } from "../../config/Server";
import styled from "styled-components";
import SignUpContainer from "./Components/SignUpContainer";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });
  const [showPw, setShowPw] = useState(true);

  const history = useHistory();

  const checkPassword = () => {
    setShowPw(!showPw);
  };

  const loginInput = (e) => {
    const { name, value } = e.target;

    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const loginButton = () => {
    const { id, password } = loginInfo;

    axios
      .post(SIGN_IN, {
        email: id,
        password,
      })
      .then((res) => {
        if (res.data.message === "SUCCESS") {
          localStorage.setItem("token", res.data.token);
          alert("로그인 성공");
          history.push("/main");
        }
      })
      .catch((error) => {
        const errorMsg = {
          INVALID_EMAIL: "아이디가 잘못 입력 됬습니다.",
          INVALID_PASSWORD: "비밀번호를 잘못 입력 하셨습니다.",
        };

        if (error) return alert(errorMsg[error.response.data.error]);
      });
  };

  const enterHandle = (e) => {
    if (loginInfo) {
      if (e.key === "Enter") {
        loginButton();
      } else {
        return null;
      }
    }
  };

  const icon = showPw ? "fas fa-eye-slash" : "fas fa-eye";

  return (
    <Logins>
      <H1>로그인</H1>
      <LonginContainers>
        <LoginCont>
          <CategoryH1>AGEOSTE 통합회원</CategoryH1>
          {INPUT_DATA.map((item, index) => {
            const { type, placeholder, name } = item;
            return (
              <LoginForm key={index}>
                <IconLabel>
                  <i
                    className={type === "text" ? "far fa-user" : "fas fa-lock"}
                  />
                </IconLabel>
                <InputForm
                  type={type === "text" ? type : showPw ? "password" : "text"}
                  placeholder={placeholder}
                  name={name}
                  onKeyPress={enterHandle}
                  onChange={loginInput}
                />
                {type === "password" && (
                  <ShowPwLabel onClick={checkPassword}>
                    <i key={icon}>
                      <span className={icon} />
                    </i>
                  </ShowPwLabel>
                )}
              </LoginForm>
            );
          })}
          <RememberForm>
            <div className="rememberId">
              <input type="checkbox" />
              <span>아이디저장</span>
            </div>
            <div className="forgetPw">
              <Link to="/">
                <span>비밀번호를 잊으셨나요?</span>
              </Link>
            </div>
          </RememberForm>
          <LoginButton onSubmit={(e) => e.preventDefault(e)}>
            <Button onClick={loginButton}>로그인</Button>
          </LoginButton>
        </LoginCont>
        <SignUpContainer />
      </LonginContainers>
    </Logins>
  );
}

export default Login;

const Logins = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 25px;
  font-size: 14px;
  box-sizing: unset;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 25px;
`;

const LonginContainers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

const LoginCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 490px;
  height: 500px;
  border: 1px solid #000;
  border-top: 3px solid #000;
`;

const CategoryH1 = styled.h1`
  margin-top: 45px;
  padding: 0 0 5px;
  font-size: 26px;
  margin-bottom: 100px;
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  margin-top: 10px;
`;

const IconLabel = styled.label`
  width: 20px;
  height: 25px;
  border: 1px solid #000;
  padding: 8px 12px;
  border-right: none;
  box-sizing: unset;
  font-size: 18px;
  text-align: center;
`;

const ShowPwLabel = styled(IconLabel)`
  border-right: solid 1px;
  border-left: none;
  cursor: pointer;
`;

const RememberForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
  margin-top: 30px;
`;

const LoginButton = styled.form`
  margin-top: 35px;
`;

const Button = styled.button`
  color: #fff;
  font-size: 18px;
  width: 420px;
  height: 50px;
  background-color: #3bb271;
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 138, 0);
  }
`;
