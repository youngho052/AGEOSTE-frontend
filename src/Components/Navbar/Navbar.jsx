import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NAVBAR_DATA } from "./data/NavbarData";
import NavbarMenu from "./Components/NavbarMenu/NavbarMenu.jsx";
import NavbarUser from "./Components/NavbarUser/NavbarUser.jsx";

function Navbar() {
  const [menuList, setMenuList] = useState();
  const [clickToggle, setClickToggle] = useState(false);

  useEffect(() => {
    setMenuList(NAVBAR_DATA);
  }, []);

  const clickHandle = () => {
    setClickToggle(!clickToggle);
  };
  console.log(clickToggle);

  return (
    <>
      <NavBar>
        <NavContainer>
          <Link>
            <img src="/images/logo.png" alt="ageoste홈페이지 로고입니다." />
          </Link>
          <NavbarMenu
            menuList={menuList}
            clickHandle={clickHandle}
            clickToggle={clickToggle}
          />
          <IconBox>
            <SearchContainer>
              <i className="searchIcon fas fa-search" />
            </SearchContainer>
            <NavbarUser />
          </IconBox>
        </NavContainer>
        {clickToggle && (
          <MenubarInformation clickToggle={clickToggle}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid blue",
                width: "100vw",
              }}
            >
              <InformationContainer>
                <OutIcon>
                  <p>Home</p>
                  <span onClick={clickHandle}>
                    <i className="fas fa-times" />
                  </span>
                </OutIcon>
                <ul>
                  {menuList.map((item, index) => {
                    return <li key={index}>{item.menuName}</li>;
                  })}
                </ul>
              </InformationContainer>
            </div>
          </MenubarInformation>
        )}
      </NavBar>
    </>
  );
}

export default Navbar;

const NavBar = styled.div`
  position: fixed;
  width: 100%;
  padding: 25px 60px;
  z-index: 1;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  margin-right: 15px;

  @media only screen and (max-width: 1100px) {
    .searchIcon {
      position: absolute;
      left: 25px;
      top: 25px;
      font-size: 25px;
      color: gray;
    }
  }
`;

const MenubarInformation = styled.div`
  transform: translateX(100%);

  @media only screen and (max-width: 1100px) {
    position: absolute;
    transform: ${(props) => props.clickToggle && "translateX(0)"};
    transition: ${(props) => props.clickToggle && "transform 0.4s ease-out"};
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 3;
    background-color: #fff;
    border: 1px solid red;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  border: 1px solid yellow;
`;

const OutIcon = styled.div`
  display: none;

  @media only screen and (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    border-bottom: 1px solid #cacaca;

    span {
      font-size: 30px;
      color: gray;
    }
  }
`;
