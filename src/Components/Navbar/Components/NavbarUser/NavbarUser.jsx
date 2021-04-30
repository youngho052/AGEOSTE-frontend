import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavbarUser() {
  const [userIcon, setUserIcon] = useState([
    "fa-map-marker-alt",
    "fa-user",
    "fa-cart-plus",
  ]);
  return (
    <NavbarUsers>
      {userIcon.map((item, index) => {
        const userLink = ["/myprofile", "login"];
        return (
          <UserList key={index}>
            <Link to={userLink[index]}>
              <i className={`fas ${item}`} />
            </Link>
          </UserList>
        );
      })}
    </NavbarUsers>
  );
}

export default NavbarUser;

const NavbarUsers = styled.ul`
  display: flex;
  align-items: center;

  a {
    color: #000;
  }

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const UserList = styled.li`
  margin: 0 15px;
`;
