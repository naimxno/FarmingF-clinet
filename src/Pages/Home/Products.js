import React from 'react';

const Products = () => {
  return (
    <div>
      <div>
        <h1 className='text-3xl text-center font-bold text-secondary m-5'>Our Products</h1>
      </div>
      <div className="card h-1/2 bg-base-100 shadow-xl">
        <figure><img className='w-50' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;