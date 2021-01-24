import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from './Components/NavbarMenu/NavbarMenu';
import NavbarUser from './Components/NavbarUser/NavbarUser';
import { NAVBAR_DATA } from './data/NavbarData';
import {SERVER} from '../../config/Server'
import ProductList from '../ProductList/ProductList';
import '../Navbar/Navbar.scss';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      toggle: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      menuList: NAVBAR_DATA,
    });
  };
  onSearch = () => {
    fetch(`${SERVER}`)
  }
  render() {
    const { menuList } = this.state;
    return (

        <div className='Navbar'>
          <nav className='nav'>
            <Link to='/'>
              <img src='/images/logo.png' alt='ageoste홈페이지 로고입니다.' />
            </Link>
            <NavbarMenu menuList={menuList} />
            <span className='search'>
              <i className='fas fa-search' />
            </span>
            <NavbarUser />
          </nav>
        </div>
        /* <div className='searchBox'>
          <div className="searchValueBox">
            <input type="text" />
            <button type="button">검색</button>
          </div>
          <div className='searchList'>
            <ProductList />
          </div>
        </div> */
      
    );
  }
}

export default Navbar;
