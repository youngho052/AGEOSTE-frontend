import React, { Component } from 'react';
import NavbarSubMenu from './NavbarSubMenu';
class NavbarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          id: 1,
          menuName: 'Men',
          submenu: [
            {
              id: 1,
              title:"의류",
              closth:[
                {
                  polo:"폴로",
                  shirts_tops:"셔츠 & 상의",
                  t_shirts:"티셔츠",
                  neat:"니트",
                  neat_sweater:"니트 & 스웨터",
                  hood_sweatshirt:"후드 & 스웻셔츠",
                  jacket_coat:"자켓 & 코트",
                  pants_shorts:"바지 & 반바지",
                  sportswear:"스포츠웨어",
                }
              ],
              shose:["....."],
              accessories:["...."],
              leathergood:["..."]
            },
          ],
        },
        {
          id: 2,
          menuName: 'Women',
          submenu: [
            {
              title: 'bb',
            },
          ],
        },
        {
          id: 3,
          menuName: 'Kids',
          submenu: [
            {
              title: 'cc',
            },
          ],
        },
      ],
      submenu: [],
    };
  }
  test = (id) => {
    const menuList = this.state.menuList;
    const index = menuList.indexOf(id);
    const findsub = menuList[index].submenu;
    this.setState({
      submenu: findsub,
    });
  };
  render() {
    const { menuList, submenu } = this.state;

    return (
      <>
        <ul className='NavbarMenu'>
          {menuList.map((item) => {
            return (
              <li
                className='navMenu'
                key={item.id}
                onClick={() => this.test(item)}>
                {item.menuName}
              </li>
            );
          })}
          <li>
            <button>
              <i className='fas fa-search' />
            </button>
          </li>
        </ul>
        <NavbarSubMenu subMenu={submenu} />
      </>
    );
  }
}

export default NavbarMenu;
