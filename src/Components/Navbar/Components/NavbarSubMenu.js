import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
class NavbarSubMenu extends Component {

  render() {
    console.log(this.props.subMenu);
    return (
      <>
      <div className="test" >
        {
          this.props.subMenu.map((list) => {
            return(
              <p key={list.id}>{list.title}</p>
            );
          })
        }
      </div>
        {/* <li
          onClick={this.handleTest}
          className='test'
          // this.props.menuName === 'FW20 시즌오프 전체상품' ? 'myPolo' : 'navMenu'
        >
          <Link to='/'>{menuName}</Link>
          <div className='subMenu'>
            <div>
              <ul>
                <li>{id}</li>
              </ul>
            </div>
          </div>
        </li> */}
      </>
    );
  }
}

export default NavbarSubMenu;
