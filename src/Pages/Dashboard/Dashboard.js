import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import UseAdmin from '../../Hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user)
  return (
    <div className="drawer drawer-mobile text-stone-50  mt-5">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden text-white">Open
          <BsFillArrowRightCircleFill className='text-xl ml-2'></BsFillArrowRightCircleFill> </label>
        <h2 className='text-5xl text-purple-500 text-center'>Welcome To Your Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          <li><Link to='/dashboard'>My Profile</Link></li>
          {admin ?
            <>
              <li><Link to='/dashboard/users'>ALL User</Link></li>
              <li><Link to='/dashboard/manageOrders'>Manage Order</Link></li>
              <li><Link to='/dashboard/manageProducts'>Manage All Products</Link></li>
              <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
            </>
            :
            <>
              <li><Link to='/dashboard/orders'>My Order</Link></li>
              <li><Link to='/dashboard/review'>Add Review</Link></li>
            </>
          }

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;