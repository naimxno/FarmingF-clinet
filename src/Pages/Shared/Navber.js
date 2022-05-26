import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import name from '../../assets/images/loge.png'
import auth from '../../firebase.init';

const Navber = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  const menuItem =
    <>
      <li><Link to='/'>HOME</Link> </li>
      <li><Link to='/portfolio'>MY PORTFOLIO</Link> </li>
      <li><Link to='/blog'>BLOG</Link> </li>
      <li>{user ? <button onClick={logout} class="btn btn-ghost">Logout</button> : <Link to='/login'>LOGIN</Link>}</li>
    </>

  return (
    <div className='sticky z-[100] top-0'>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <Link to='/'><img src={name} className="w-28" alt="" srcSet="" /></Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItem}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;