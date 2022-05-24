import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
  return (
    <div>
      <img className='w-screen h-auto rounded-box' src={banner} alt="Burger" />
    </div>
  );
};

export default Banner;