import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { PROMOTION, SEASON_OFF } from './data/MainData';
import MainPromotions from './Components/MainPromotions/MainPromotions';
import CollectionSlider from '../../Components/CollectionSlider/CollectionSlider';
import WearCollection from '../../Components/WearCollection/WearCollection';
import MainSalesList from './Components/MainSalesList/MainSalesList';
import ProductListSlider from '../../Components/ProductListSlider/ProductListSlider';
import { SERVER } from '../../config/Server';
import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }
  componentDidMount = () => {
    fetch(`${SERVER}/product?order=?&page_count=8`)
      .then((response) => response.json())
      .then((result) => this.setState({ productList: result.PRODUCTS_LIST }));
  };

  render() {
    const { productList } = this.state;
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
          <section className='selfRecomandList'>
            <h2>나만을 위한 아고스테의 맞춤형 추천</h2>
            <ProductListSlider productListItem={productList} />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Main;
