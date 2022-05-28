import React, { useState } from 'react';
import people from './Data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div>
      <div className='m-12'>
        <h1 className='text-3xl text-center font-bold text-teal-600 '>Our Reviews</h1>
        <div className='border-2 border-teal-600 rounded-lg m-auto w-40'></div>
      </div>
      <div className='card bg-base-100 text-center mx-auto my-16 p-5 max-w-lg shadow-md capitalize'>
        <div className='w-40 h-40 mx-auto my-6'>
          <img src={image} alt={name} className='w-full h-full rounded-full object-cover' />
        </div>
        <h4 className='text-slate-500 font-medium'>{name}</h4>
        <p className='text-slate-500 mb-2 font-medium'>{job}</p>
        <p className='mb-5 text-sm font-medium text-zinc-400'>{text}</p>
        <div className='mb-3 text-blue-400'>
          <button onClick={prevPerson} className='text-2xl'>
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson} className='text-2xl'>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;