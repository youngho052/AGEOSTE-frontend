import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignUpContainer(props) {
  return (
    <SignUpContainers>
      <SignupForm>
        <SignupH1>아직 AGEOSTE 회원이 아니신가요?</SignupH1>
        <Benifit>
          <span>지금 AGEOSTE에 회원가입하시면</span>
          <span>다양한 멤버쉽 혜택을 누리실 수 있습니다.</span>
        </Benifit>
        <img alt="아거스테 로고" src="images/Membership.png" className="Logo" />
        <Link to="/signup">
          <SignupButton>회원가입</SignupButton>
        </Link>
      </SignupForm>
    </SignUpContainers>
  );
}

export default SignUpContainer;

const SignUpContainers = styled.div`
  display: flex;
  width: 490px;
  height: 500px;
  border: 1px solid #000;
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
  margin-left: 37px;

  .Logo {
    margin-top: 60px;
    width: 100px;
  }
`;

const SignupH1 = styled.h1`
  font-size: 26px;
`;

const Benifit = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  text-align: center;
`;

const SignupButton = styled.button`
  width: 420px;
  height: 50px;
  margin-top: 72px;
  border: 1px solid rgb(4, 236, 4);
  color: rgb(4, 236, 4);
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #3bb271;
    border: none;
  }
`;
