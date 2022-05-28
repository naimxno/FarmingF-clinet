import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Information = () => {
  return (
    <div className="card  w-full bg-base-100">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center text-teal-600 uppercase">Million Business Trust Us</h2>
        <p className='text-center font-medium'>Try To Understand Users Expectation</p>
        <div className='grid lg:grid-cols-4 border-2 border-teal-600 grid-cols-2 m-5  w-full'>
          <div className='card p-5 w-40 m-auto flex items-center flex-col text-center'>
            <BsPeopleFill className='text-6xl p-2 text-teal-600'></BsPeopleFill>
            <h1 className='text-3xl font-bold'>100+</h1>
            <h1 className='text-lg font-bold text-teal-600 p-1'>CUSTOMERS</h1>
          </div>
          <div className='card p-5 w-40 m-auto flex items-center flex-col text-center'>
            <FaCoins className='text-6xl p-2 text-teal-600'></FaCoins>
            <h1 className='text-3xl font-bold'>3M+</h1>
            <h1 className='text-lg font-bold text-teal-600 p-1'>REVENUE</h1>
          </div>
          <div className='card p-5 w-40 m-auto flex items-center flex-col text-center'>
            <VscFeedback className='text-6xl p-2 text-teal-600'></VscFeedback>
            <h1 className='text-3xl font-bold'>1000+</h1>
            <h1 className='text-lg font-bold text-teal-600 p-1'>REVIEWS</h1>
          </div>
          <div className='card p-5 m-auto w-40 flex items-center flex-col text-center'>
            <MdOutlineAddShoppingCart className='text-6xl p-2 text-teal-600'></MdOutlineAddShoppingCart>
            <h1 className='text-3xl font-bold'>150+</h1>
            <h1 className='text-lg font-bold text-teal-600 p-1'>PRODUCTS</h1>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Information;