import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import profile from '../../assets/images/new.jpg'

const Portfolio = () => {
  return (
    <div>
      <div className="card card-side bg-slate-800 shadow-xl m-5 z-[1]">
        <div className='p-5 bg-slate-700 rounded-2xl'>
          <div className="avatar m-5">
            <div className="w-40 mask mask-hexagon">
              <img src={profile} />
            </div>
          </div>
          <h1 className='text-xl text-center text-white font-bold'>Naimur Rahaman</h1>
          <h1 className=' text-sm text-center text-white font-bold'>naimxcri@gmail.com</h1>
        </div>
        <div className="card-body text-white my-5 ">
          <h2 className="text-xl font-bold">HEY! I AM</h2>
          <h1 className=' text-xl font-bold'>Naimur Rahaman</h1>
          <p>To help developers navigate accessibility jargon, write better code,
            and to empower them to make the Internet,
            An Inclusive Internet.</p>
        </div>
      </div>
      <div>
        <div className="card card-side bg-slate-800 shadow-xl m-5">
          <div className="card-body">
            <div className="divide-y divide-blue-200">
              <h2 className="text-xl text-center text-white font-bold p-5">Education</h2>
              <div className='text-white p-5 grid gap-5'>
                <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
                  <h1 className='text-xl text-white font-bold'>M.Sc. in Chemistry</h1>
                  <strong>Dec 2021 — Present</strong>
                  <p>Institution National University</p>
                </div>
                <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
                  <h1 className='text-xl text-white font-bold'>B.Sc. in Chemistry</h1>
                  <strong>dec 2016 — Sep 2021</strong>
                  <p>Institution National University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card card-side  bg-slate-800 shadow-xl m-5">
          <div className="card-body">
            <div className="divide-y divide-blue-200">
              <h2 className="text-xl text-center text-white font-bold p-5">My Skills</h2>
              <div className='text-white p-5 grid gap-5'>
                <div className='p-5 w-28 bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <AiFillHtml5 className='text-6xl p-2'></AiFillHtml5>
                    <h1 className='text-lg text-white font-bold'>HTML5</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;