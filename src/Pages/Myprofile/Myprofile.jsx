import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { SERVER_ACCOUNT } from "../../config/Server";
import IntroduceContainer from "./Components/IntroduceContainer";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../Store/Action";

function Myprofile() {
  const [userData, setUserData] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData());
  }, []);

  const item = useSelector((store) => console.log(store.dataReducer));
  console.log(item);
  // useEffect(() => {
  //   axios(SERVER_ACCOUNT, {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => {
  //       setUserData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <MyProfile>
      <ProfileContainer>
        <IntroduceContainer />
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
