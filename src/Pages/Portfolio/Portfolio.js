import React from 'react';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiMongodb, DiNodejsSmall } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import profile from '../../assets/images/new.jpg'

const Portfolio = () => {
  return (
    <div>
      {/* ------------------header------------------------ */}
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
      {/* -----------------Education----------------------- */}
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
      {/* -----------------My Skills----------------------- */}
      <div>
        <div className="card card-side  bg-slate-800 shadow-xl m-5">
          <div className="card-body">
            <div className="divide-y divide-blue-200">
              <h2 className="text-xl text-center text-white font-bold p-5">My Skills</h2>
              <div className='text-white p-5 grid gap-2 lg:grid-cols-8 grid-cols-2 md:grid-cols-6'>

                <div className='p-5 m-auto w-28 bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <AiFillHtml5 className='text-orange-600 text-6xl p-2'></AiFillHtml5>
                    <h1 className='text-lg text-white font-bold'>HTML5</h1>
                  </div>
                </div>

                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <DiCss3 className='text-6xl text-green-600 p-2'></DiCss3>
                    <h1 className='text-lg text-white font-bold'>CSS3</h1>
                  </div>
                </div>

                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <BsFillBootstrapFill className='text-purple-600 text-6xl p-2'></BsFillBootstrapFill>
                    <h1 className='text-lg text-white font-bold'>Bootstrap</h1>
                  </div>
                </div>
                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <SiTailwindcss className='text-6xl text-sky-600 p-2'></SiTailwindcss>
                    <h1 className='text-lg text-white font-bold'>Tailwind</h1>
                  </div>
                </div>
                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <DiJavascript1 className='text-amber-600 text-6xl p-2'></DiJavascript1>
                    <h1 className='text-lg text-white font-bold'>JavaScript</h1>
                  </div>
                </div>
                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <GrReactjs className='text-sky-600 text-6xl p-2'></GrReactjs>
                    <h1 className='text-lg text-white font-bold'>React Js</h1>
                  </div>
                </div>
                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <SiFirebase className='text-6xl text-amber-600 p-2'></SiFirebase>
                    <h1 className='text-lg text-white font-bold'>Firebase</h1>
                  </div>
                </div>
                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <AiFillGithub className='text-6xl  p-2'></AiFillGithub>
                    <h1 className='text-lg text-white font-bold'>GitHub</h1>
                  </div>
                </div>
                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <FiSettings className='text-6xl p-2'></FiSettings>
                    <h1 className='text-lg text-white font-bold'>ExpressJs</h1>
                  </div>
                </div>
                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <DiNodejsSmall className='text-green-600 text-6xl p-2'></DiNodejsSmall>
                    <h1 className=' text-lg text-white font-bold'>Node Js</h1>
                  </div>
                </div>
                <div className='p-5 w-28 m-auto bg-slate-700 rounded-2xl text-center'>
                  <div className='flex items-center flex-col text-center'>
                    <DiMongodb className='text-green-600 text-6xl p-2'></DiMongodb>
                    <h1 className=' text-lg text-white font-bold'>MongoDB</h1>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* --------------live website------------- */}
        <div className="card card-side bg-slate-800 shadow-xl m-5">
          <div className="card-body">
            <div className="divide-y divide-blue-200">
              <h2 className="text-xl text-center text-white font-bold p-5">My Portfolio</h2>
              <div className='text-white p-5 grid gap-5 grid lg:grid-cols-3'>
                <div className="card m-auto w-60 shadow-xl image-full">
                  <div className="card-body">
                    <h2 className="text-center text-3xl p-2">happyouting</h2>
                    <div className="card-actions justify-center">
                      <a href="https://happyouting-188a5.firebaseapp.com/"><button className="btn btn-primary">LIVE SITE</button></a>
                    </div>
                  </div>
                </div>
                <div className="card w-60  m-auto shadow-xl image-full">
                  <div className="card-body">
                    <h2 className="text-center text-3xl p-2">BOOK APP</h2>
                    <div className="card-actions justify-center">
                      <a href="https://sunny-horse-197c7c.netlify.app/"><button className="btn btn-primary">LIVE SITE</button></a>
                    </div>
                  </div>
                </div>
                <div className="card w-60  m-auto shadow-xl image-full">
                  <div className="card-body">
                    <h2 className="text-center text-3xl p-2">In Focus</h2>
                    <div className="card-actions justify-center">
                      <a href="https://infocus-c94eb.firebaseapp.com/Login"><button className="btn btn-primary">LIVE SITE</button></a>
                    </div>
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