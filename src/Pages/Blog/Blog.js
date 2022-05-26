import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="card card-side bg-slate-800 shadow-xl m-5">
        <div className="card-body">
          <div className='text-white p-5 grid gap-5'>

            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>1. How will you improve the performance of a React Application?</h1>
              <p>Institution National University</p>
            </div>
            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>2. What are the different ways to manage a state in a React application?</h1>
              <p>Institution National University</p>
            </div>
            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>3. How does prototypical inheritance work?</h1>
              <p>Institution National University</p>
            </div>
            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
              <p>Institution National University</p>
            </div>
            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
              <p>Institution National University</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;