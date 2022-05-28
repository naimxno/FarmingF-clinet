import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch('https://serene-hollows-95541.herokuapp.com/purchases')
      .then(res => res.json())
      .then(data => setAllOrders(data))
  }, [])
  return (
    <div className="overflow-x-auto text-black mt-5 p-5">
      <table className="table w-full">

        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {
            allOrders.map(order =>
              <tr key={order._id}>
                <th>{order.product_name}</th>
                <td>{order.quantity}</td>
                <td>
                  <span>payed</span>
                  <button className="btn  btn-xs btn-outline ml-2">shipping</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;