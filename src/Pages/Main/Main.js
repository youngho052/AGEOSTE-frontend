import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { PROMOTION, SEASON_OFF } from './data/MainData';
import MainPromotions from './Components/MainPromotions';

import CollectionSlider from '../../Components/CollectionSlider/CollectionSlider';
import WearCollection from '../../Components/WearCollection/WearCollection';
import MainSalesList from './Components/MainSalesList';
import './Main.scss';

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
            <h2 hidden>스포츠 웨어 , 스윗 팬츠, 후디</h2>
            <WearCollection />
          </section>
          <section className='seasonCollection'>
            <h2>The AGEOSTE World</h2>
            <MainSalesList />
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
