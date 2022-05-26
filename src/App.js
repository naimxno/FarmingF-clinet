
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Singup from './Pages/Login/Singup';
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
        <Route path='/order/:id' element={<Order></Order>}></Route>
      </Routes>
    </div>
  );
}

export default App;
