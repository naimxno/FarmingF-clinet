import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user] = useAuthState(auth);



  useEffect(() => {
    if (user) {
      fetch(`https://serene-hollows-95541.herokuapp.com/purchase?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }
  }, [user])

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
            myOrders.map(myOrder =>
              <tr key={myOrder._id}>
                <th>{myOrder.product_name}</th>
                <td>{myOrder.quantity}</td>
                <td>
                  <button className="btn  btn-sm btn-outline mr-2">Pay</button>
                  <button className="btn  btn-sm btn-outline">Cancel</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;