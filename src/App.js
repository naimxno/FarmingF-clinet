
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllUser from './Pages/Dashboard/AllUser';
import Dashboard from './Pages/Dashboard/Dashboard';

import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageAllProduct from './Pages/Dashboard/ManageAllProduct';
import MyOrders from './Pages/Dashboard/MyOrders';
import Profile from './Pages/Dashboard/Profile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Singup from './Pages/Login/Singup';
import NotFound from './Pages/NotFound/NotFound';
import Order from './Pages/Order/Order';
import Portfolio from './Pages/Portfolio/Portfolio';
import Navber from './Pages/Shared/Navber';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-1'>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/order/:orderId' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='users' element={<AllUser></AllUser>}></Route>
          <Route path='manageOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='manageProducts' element={<ManageAllProduct></ManageAllProduct>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
