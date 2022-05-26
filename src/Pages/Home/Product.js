import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

  const navigate = useNavigate();
  const navigateToOrder = id => {
    navigate(`order/${id}`)
  }

  return (
    <div className="card bg-base-100 shadow-xl">

      <img src={product.image} alt="Shoes" className="h-1/2" />

      <div className="card-body justify-evenly">
        <h2 className="card-title">{product.product_name}</h2>
        <p className='grow-0'>{product.description}</p>
        <strong>Available Quantity :  {product.available_quantity} </strong>
        <strong>Minimum Order Quantity :  {product.min_order_quantity} </strong>
        <strong>Price per Product :  {product.min_order_quantity} </strong>
        <div className="card-actions">
          <button onClick={() => navigateToOrder(product._id)} className="btn btn-primary w-full">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;