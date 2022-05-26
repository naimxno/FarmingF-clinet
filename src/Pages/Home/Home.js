import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Information from './Information';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <Information></Information>
      <Footer></Footer>
    </div>
  );
};

export default Home;