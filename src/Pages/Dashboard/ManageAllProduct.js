import React, { useEffect, useState } from 'react';

const ManageAllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className="overflow-x-auto w-full text-black">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Available Quantity</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product =>
              <tr key={product._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
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
                <td>Purple</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProduct;