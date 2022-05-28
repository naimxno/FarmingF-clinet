import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/purchases')
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
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {
            allOrders.map(order =>
              <tr key={order._id}>
                <th>{order.product_name}</th>
                <td>{order.quantity}</td>
                <td>Quality Control Specialist</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;