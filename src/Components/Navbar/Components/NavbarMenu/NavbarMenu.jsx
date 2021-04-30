import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavbarMenu(props) {
  const { menuList, clickHandle, clickToggle } = props;

  return (
    <NavbarMenus>
      {!clickToggle && (
        <MenubarContainer onClick={clickHandle}>
          <i className="menuBar fas fa-bars" />
        </MenubarContainer>
      )}
      <MenuContainer>
        {menuList?.map((item, index) => {
          const nameValue = item.menuName === "나의 라코스테 폴로";
          return (
            <MenuList key={index} nameValue={nameValue}>
              <Link to="/">{item.menuName}</Link>
            </MenuList>
          );
        })}
      </MenuContainer>
    </NavbarMenus>
  );
}

export default NavbarMenu;

const NavbarMenus = styled.div`
  z-index: 3;
`;

const MenubarContainer = styled.div`
  display: none;

  @media only screen and (max-width: 1100px) {
    position: absolute;
    right: 25px;
    top: 25px;
    display: block;

    span {
      display: block;
    }

    .menuBar {
      font-size: 25px;
      color: gray;
    }
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const MenuList = styled.li`
  margin: 0 35px;
  font-weight: bold;

  a {
    font-size: 14px;
    color: ${(props) => (props.nameValue ? "#dd1785" : "rgb(50, 50, 50)")};
  }

  @media only screen and (max-width: 1400px) {
    margin: 0 15px;
  }
`;
