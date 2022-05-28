import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user] = useAuthState(auth);



  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/purchase?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }
  }, [user])

  return (
    <div class="overflow-x-auto text-black mt-5 p-5">
      <table class="table w-full">

        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {
            myOrders.map(myOrder =>
              <tr>
                <th>{myOrder.product_name}</th>
                <td>{myOrder.quantity}</td>
                <td>Quality Control Specialist</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;