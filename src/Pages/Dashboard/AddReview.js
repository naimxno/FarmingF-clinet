import React from 'react';

const AddReview = () => {
  return (


    <div className="card w-96 m-auto mt-5 bg-base-100 shadow-xl">
      <div className="card-body">

        <form className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
          <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
          <button className="btn btn-primary w-full">Add Your review</button>
        </form>

      </div>
    </div>
  );
};

export default AddReview;