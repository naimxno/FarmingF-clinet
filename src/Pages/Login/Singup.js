import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Singup = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithGoogle,
    gUser,
    gLoading,
    gError
  ] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [
    updateProfile,
    updating,
    updateError
  ] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let errorMessage;

  if (error || gError) {
    errorMessage = <p className='p-1 text-red-500'> <small>{error?.message}||{gError?.message}</small> </p>
  }
  if (user || gUser) {
    console.log(user || gUser);
  }
  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  const onSubmit = async data => {
    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: Date.name });
    navigate('/')
  };
  return (
    <div className='flex justify-center item-center mt-8'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">Log In</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs py-2">
              <input
                type="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required"
                  }
                })} />
              <label className="label">
                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>

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

          <small className='text-center'>All ready have an account? <strong><Link className='text-red-900' to='/login'>Login</Link></strong> </small>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
};

export default Singup;