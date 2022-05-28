import React from 'react';

const AddProduct = () => {

  const handleSubmit = event => {
    event.preventDefault();
    const phoneNumber = event.target.phoneNumber.value;
    const address = event.target.address.value;
    const quantity = event.target.quantity.value;
    const PurchaseProduct = {
      // productId: order._id,
      // product_name: order.product_name,
      // email: user?.email,
      // phoneNumber,
      // address,
      // quantity
    }
  }
  return (
    <div className="grid text-black flex-grow w-96 card bg-white rounded-box mx-auto my-8">
      <h2 className="text-2xl h-16 font-bold w-full text-center p-3">Add A Product</h2>

      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
        <input name='productName' type="text" placeholder='Product name' className="input w-full  text-lg font-bold max-w-xs" />
        <input name='Quantity' type="text" placeholder='Add Quantity' className="input w-full  text-lg font-bold max-w-xs" />
        <input name='orderQuantity' type="number" placeholder='Minimum Order Quantity' className="input w-full  text-lg font-bold max-w-xs" />

        <input name='Price' type="number" placeholder='Price per Product' className="input w-full  text-lg font-bold max-w-xs" />

        <input name='address' type="text" placeholder='img' className="input w-full mb-2 text-lg font-bold max-w-xs" />


        <input
          type="Submit"
          defaultValue='Add product'
          className="btn btn-primary w-full text-white input-bordered" />
      </form>
    </div>
  );
};

export default AddProduct;