import React, { useEffect, useState } from 'react';

const ManageAllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://serene-hollows-95541.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className="overflow-x-auto w-full text-black mt-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Available Quantity</th>
            <th>Update Quantity</th>
            <th>Product Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product =>
              <tr key={product._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{product.product_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{product.available_quantity}</div>
                  </div>
                </td>
                <td><input type="number" placeholder="Quantity" class="input w-20 input-bordered input-xs" />
                  <button className="btn  btn-xs btn-outline ml-2">ADD</button>
                </td>
                <td><button className="btn  btn-sm btn-outline">Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProduct;