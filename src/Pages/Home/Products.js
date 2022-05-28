import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://serene-hollows-95541.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 3)))
  }, [])
  return (
    <div>
      <div className='m-12'>
        <h1 className='text-3xl text-center font-bold text-teal-600 '>Our Products</h1>
        <div className='border-2 border-teal-600 rounded-lg m-auto w-40'></div>
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