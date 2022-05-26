import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Order = () => {
  const [user, loading] = useAuthState(auth);
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/order/${orderId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setOrder(data))
  }, []);

  if (loading) {
    return <Loading></Loading>
  }


  return (
    <div class="flex flex-col mt-5 w-full text-white lg:flex-row items-center">
      <div class="grid flex-grow w-96  card bg-slate-800 rounded-box place-items-center">
        <h2 className="text-2xl font-bold bg-slate-700 w-full h-16 text-center p-3 ">Product Information</h2>
        <img src={order.image} alt="Shoes" className="pt-4" />

        <div className="card-body justify-evenly">
          <h2 className="card-title">{order.product_name}</h2>
          <p className='grow-0'>{order.description}</p>
          <strong>Available Quantity :  {order.available_quantity} </strong>
          <strong>Minimum Order Quantity :  {order.min_order_quantity} </strong>
          <strong>Price per Product :  {order.min_order_quantity} </strong>
        </div>
      </div>
      <div class="divider divider-black lg:divider-horizontal"></div>
      <div class="grid flex-grow w-96 h-96 card bg-slate-800 rounded-box text-center">
        <h2 className="text-2xl h-16 font-bold bg-slate-700 w-full text-center p-3 ">Product Information</h2>
        <h2>{user?.displayName}</h2>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default Order;