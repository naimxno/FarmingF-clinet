import React, { useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className="card card-side  shadow-xl m-5 z-[1]">
      <div className='p-5 rounded-2xl'>
        <div className="avatar m-5">
          <div className="w-40 border">
            <img src={user?.photoURL} alt="your profile image" />
          </div>
        </div>
      </div>
      <div className="card-body text-black  my-5 ">
        <h1 className='text-xl  font-bold'>{user?.displayName}</h1>
        <h1 className=' text-sm  font-bold'>Phone : {user?.phoneNumber || "Number not found"}</h1>
        <h1 className=' text-sm  font-bold'>Email : {user?.email}</h1>
      </div>
    </div>
  );
};

export default Profile;