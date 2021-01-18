import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { PROMOTION, SEASON_OFF } from './data/MainData';
import MainPromotions from './Components/MainPromotions';

import './Main.scss';
import CollectionSlider from '../../Components/CollectionSlider/CollectionSlider';
class Main extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className='Main'>
          {PROMOTION.map((item) => {
            return (
              <section key={item.id} className={item.classNames}>
                <h2 hidden>
                  {item.title}
                  {item.subTitle}
                </h2>
                <MainPromotions
                  title={item.title}
                  subTitle={item.subTitle}
                  parAgraphs={item.parAgraphs}
                  menLinks={item.menLinks}
                  womenLinks={item.womenLinks}
                  imgUrl={item.imgUrl}
                  altMsg={item.altMsg}
                />
              </section>
            );
          })}
          <section className='seasonOff'>
            <h2 className='title'>아고스테 시즌오프 세일!</h2>
            <CollectionSlider data={SEASON_OFF} />
          </section>
          <section className='sportsWear'>
            <img
              src='https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw549cc0ae/2020/FW20/Modular_V3/poloshop-new/StrateStory-Desk_cosy.jpg?imwidth=1065&impolicy=custom'
              alt='아고스테 후드 스웻셔츠 트레이닝 팬츠와 함께하는 집곡생활'
            />
            <p>후드, 스웻셔츠, 트레이닝 팬츠와 함께하는 집콕생활</p>
          </section>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>3</div>
          <div>4</div>
        </main>
      </>
    );
  }
}

export default Main;
