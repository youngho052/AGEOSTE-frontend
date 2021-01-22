import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from './Components/NavbarMenu/NavbarMenu';
import NavbarUser from './Components/NavbarUser/NavbarUser';
import { NAVBAR_DATA } from './data/NavbarData';
import '../Navbar/Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
    };
  }
  componentDidMount = () => {
    this.setState({
      menuList: NAVBAR_DATA,
    });
  };


  render() {
    return (
      <nav className='Navbar'>
        <Link to='/'>
          <img src='/images/logo.png' alt='ageoste홈페이지 로고입니다.' />
        </Link>
        <NavbarMenu />
        <NavbarUser />
      </nav>
    );
  }
}

export default Navbar;
