import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';


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




  const handleSubmit = event => {
    event.preventDefault();
    const phoneNumber = event.target.phoneNumber.value;
    const address = event.target.address.value;
    const quantity = event.target.quantity.value;
    const PurchaseProduct = {
      productId: order._id,
      product_name: order.product_name,
      email: user?.email,
      phoneNumber,
      address,
      quantity
    }
    fetch('http://localhost:5000/purchase', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(PurchaseProduct)
    })
      .then(res => res.json)
      .then(data => {
      })
  }




  return (
    <div className="flex flex-col mt-5 w-full lg:flex-row items-center">
      <div className="grid flex-grow w-96  card bg-white rounded-box place-items-center">
        <h2 className="text-2xl font-bold  w-full h-16 text-center p-3 ">Product Information</h2>
        <img src={order.image} alt="Shoes" className="pt-4" />

        <div className="card-body justify-evenly">
          <h2 className="card-title">{order.product_name}</h2>
          <p className='grow-0'>{order.description}</p>
          <strong>Available Quantity :  {order.available_quantity} </strong>
          <strong>Minimum Order Quantity :  {order.min_order_quantity} </strong>
          <strong>Price per Product :  {order.min_order_quantity} </strong>
        </div>
      </div>
      <div className="divider divider-black lg:divider-horizontal"></div>
      <div className="grid flex-grow w-96 card bg-white rounded-box mb-8">
        <h2 className="text-2xl h-16 font-bold w-full text-center p-3">Check Out</h2>

        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
          <input name='productName' type="text" disabled placeholder={order.product_name} class="input w-full  text-lg font-bold max-w-xs" />
          <input name='userName' type="text" disabled placeholder={user?.displayName} class="input w-full  text-lg font-bold max-w-xs" />
          <input name='email' type="email" disabled placeholder={user?.email} class="input w-full  text-lg font-bold max-w-xs" />

          <input name='phoneNumber' type="text" placeholder='Phone number' class="input w-full  text-lg font-bold max-w-xs" />

          <input name='address' type="text" placeholder='Address' class="input w-full mb-2 text-lg font-bold max-w-xs" />

          <input name='quantity' required min={order.min_order_quantity} max={order.available_quantity} type="number" placeholder='Quantity' className="input w-full mb-2 text-lg font-bold max-w-xs" />

          <input
            type="Submit"
            defaultValue='Order Confirm'
            className="btn btn-primary w-full text-white input-bordered" />
        </form>
      </div>
    </div>
  );
};

export default Order;