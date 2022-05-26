import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      <div className='m-12'>
        <h1 className='text-3xl text-center font-bold text-secondary'>Our Products</h1>
        <div style={{ width: '10rem', border: '2px solid black', margin: 'auto', borderRadius: '10px' }}></div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
          products.map(product => <Product
            key={product._id}
            product={product}
          ></Product>)
        }
      </div>
    </div>
  );
};

export default Products;