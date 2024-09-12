import React, { useEffect } from "react";
import styled from "styled-components";
import IntroduceContainer from "./Components/IntroduceContainer";

import Members from "./Components/Members";

function Myprofile() {
  return (
    <MyProfile>
      <ProfileContainer>
        <IntroduceContainer />
        <Members />
      </ProfileContainer>
    </MyProfile>
  );
}

export default Myprofile;

const MyProfile = styled.div`
  height: 1200px;
  background-color: rgb(9, 134, 30);
  font-size: 14px;
  padding: 25px;
`;

const ProfileContainer = styled.div`
  width: 920px;
  height: 950px;
  margin: 100px auto;
  background-color: #fff;
`;
