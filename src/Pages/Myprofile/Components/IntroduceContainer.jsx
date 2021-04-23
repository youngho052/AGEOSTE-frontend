import React from "react";
import styled from "styled-components";
import { NAV_DATA } from "../Data/mockData";

function IntroduceContainer() {
  return (
    <>
      <IntroUser>
        <UserIntro>
          <IntroSpan>
            안녕하세요 님 마이페이지에 오신 것을 환영합니다.
          </IntroSpan>
        </UserIntro>
        <PageLogo>
          <img src="images/logo.png" alt="아거스테 로고" />
        </PageLogo>
      </IntroUser>
      <NavBar>
        {NAV_DATA.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </NavBar>
    </>
  );
}

export default IntroduceContainer;

const IntroUser = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const UserIntro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 635px;
  height: 95px;
  border-right: 1px solid gray;
`;

const IntroSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const PageLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285px;
  height: 95px;
  background-color: #fff;

  img {
    width: 150px;
  }
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  height: 50px;
  margin-left: 50px;

  li {
    padding: 15px;
    cursor: pointer;
  }

  li:nth-child(1) {
    background-color: #fff;
    border-bottom: 3px solid #000;
  }

  li:nth-child(n + 2):hover {
    color: #fff;
    background-color: #000;
    border-bottom: 3px solid #000;
  }
`;
