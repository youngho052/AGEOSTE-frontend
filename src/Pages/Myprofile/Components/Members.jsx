import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../../Store/Action";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Members() {
  const [gradeList, setGradeList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData());
    axios
      .get("/data/userData.json")
      .then((res) => setGradeList(res.data))
      .catch((error) => console.log(error));
  }, []);

  const userInformation = useSelector((store) => store.dataReducer.accounts);
  // console.log(userInformation);
  // console.log(gradeList);
  return (
    <MembershipContainer>
      {gradeList?.map((item, index) => {
        const Validation =
          userInformation?.membership.grade === item.membership;
        return (
          <MemberShip key={index}>
            {userInformation?.membership && (
              <UserTear type={Validation}>
                <img src={item.image} alt="티어별 이미지" />
                <P type={Validation}>{item.name}</P>
                <P type={Validation}>{item.tear}</P>
                <P type={Validation}>{item.point}</P>
                <P type={Validation}>{item.birth}</P>
                <P type={Validation}>{item.levelup}</P>
              </UserTear>
            )}
            <More>
              <Button>
                <Link to="/">+더 보기</Link>
              </Button>
            </More>
          </MemberShip>
        );
      })}
    </MembershipContainer>
  );
}

export default Members;

const MembershipContainer = styled.div`
  display: flex;
  background-color: #e7e7e7;
`;

const MemberShip = styled.div``;

const UserTear = styled.div`
  ${(props) => props.theme.flexStyle};
  flex-direction: column;
  width: 307px;
  height: 400px;
  border: 1px solid rgb(121, 121, 121);
  background-color: ${(props) => (props.type ? "#244381" : "#f2f2f2")};

  img {
    width: 70px;
  }
`;

const P = styled.p`
  color: ${(props) => (props.type ? "yellow" : "black")};
  margin-top: 15px;
`;

const More = styled.div`
  ${(props) => props.theme.flexStyle};
  width: 307px;
  height: 50px;
  background-color: #182a4e;
`;

const Button = styled.button`
  a {
    color: #fff;
  }
`;
