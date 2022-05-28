import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="card card-side bg-slate-800 shadow-xl m-5">
        <div className="card-body">
          <div className='text-white p-5 grid gap-5'>

            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>1. How will you improve the performance of a React Application?</h1>
              <p>If I can learn React hooks (such as useState,useEffect,useRef,useCallback,useMemo,useContext and useReducer), React component, React Router etc. then I can improve my React application skill. To improve in React Application I need to work hard and soul.</p>
            </div>
            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>2. What are the different ways to manage a state in a React application?</h1>
              <p>Managing state in your React apps isn’t as simple as using useState or useReducer.Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind.When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:
                <br />
                1.Local state
                <br />
                2.Global state
                <br />
                3.Server state
                <br />
                4.URL state</p>
            </div>
            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>3. How does prototypical inheritance work?</h1>
              <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
            </div>
            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
              <p>useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                <br />
                const [products,setProducts] = useState([])
                <br />
                Here 'products' and 'setProducts' both are function. In 'products' we can pass the initial state and update 'products' with the help of 'setProducts'.
                <br />
                So we can't set directly like products = [...]</p>
            </div>
            <div className='grid gap-1 p-5 bg-slate-700 rounded-2xl '>
              <h1 className='text-xl text-green-300 font-bold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
              <p>Using Array.includes(), Array.indexOf(), Array.find(), and Array.filter() we can implement a search to find products by name. The includes() method returns either a true or a false if a value exists in an array or not.
                This is the syntax:
                <br />
                const products = [name,price, description]
                <br />
                products.includes(name)</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;