import React, { useEffect, useState } from 'react';

const AllUser = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [users])

  const makeAdmin = email => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accesstoken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
      })
  }
  return (
    <div class="overflow-x-auto text-black mt-5 p-5">
      <table class="table w-full">

        <thead>
          <tr>
            <th>User Email</th>
            <th>Make Admin</th>
            <th>Remove User</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =>
              <tr>
                <th>{user.email}</th>
                <td>
                  {
                    user.role ? <h1 className='font-bold ml-4'>Admin</h1> : <button onClick={() => makeAdmin(user.email)} class="btn  btn-sm btn-outline">Make Admin</button>
                  }
                </td>
                <td>
                  <button class="btn  btn-sm btn-outline">Remove User</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;