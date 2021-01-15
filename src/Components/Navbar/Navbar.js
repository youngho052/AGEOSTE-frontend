import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from './Components/NavbarMenu';
import NavbarUser from './Components/NavbarUser';
import { NAVBAR_DATA } from './data/NavbarData';

import '../Navbar/Navbar.scss';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      submenu: [],
    };
  }
  componentDidMount = () => {
    this.setState({
      menuList: NAVBAR_DATA,
    });
  };
  onMenuData = (id) => {
    const menuList = this.state.menuList;
    const submenuFind = menuList.find((item) => item.id === id);
    this.setState({
      submenu: submenuFind.submenu,
    });
  };

  render() {
    return (
      <nav className='Navbar'>
        <div className='nav'>
          <Link to='/'>
            <img src='images/logo.png' alt='ageoste홈페이지 로고입니다.' />
          </Link>
          <NavbarMenu
            onSubMenuList={this.state.menuList}
            updateSubMenu={this.onMenuData}
            sendMenuList={this.state.submenu}
          />
          <NavbarUser />
        </div>
      </nav>
    );
  }
}

export default Navbar;
