import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
const Login = () => {
  const [
    signInWithGoogle,
    gUser,
    gLoading,
    gError
  ] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorMessage;

  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    errorMessage = <p className='p-1 text-red-500'> <small>{error?.message}||{gError?.message}</small> </p>
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className='flex justify-center item-center mt-8'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">Log In</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs py-2">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required"
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })} />
              <label className="label">
                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs py-2">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required"
                  },
                  minLength: {
                    value: 6,
                    message: 'Must Be 6 characters or longer'
                  }
                })} />
              <label className="label">
                {errors?.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors?.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>

            {errorMessage}

            <input
              type="Submit"
              defaultValue='LOGIN'
              placeholder="Your Password"
              className="input bg-slate-800 text-white input-bordered w-full max-w-xs btn" />

          </form>

          <small className='text-center'>New to Our website? <strong><Link className='text-red-900' to='/singup'>Create new account</Link></strong> </small>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
};

export default Login;