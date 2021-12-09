import React, { useState } from 'react';
import axios from 'axios';

const Registration = (props) => {
  const [userData, setUserData] = useState({
    user: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((user) => {
      return {
        ...user,
        [name]: value,
      };
    });
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    axios
      .post(
        'http://localhost:3001/registrations',
        {
          user: {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((resp) => {
        if (resp.data.status === 'created') {
          props.handleSuccessfullAuth();
        }
        console.log('registration response', resp);
      })
      .catch((error) => {
        console.log('registration error', error);
      });
    e.preventDefault();
  };

  const { username, email, password, password_confirmation } = userData;

  return (
    <div>
      <h1 className='text-white text-6xl'>Registration</h1>
      <form onSubmit={handleSubmit} className='mt-5'>
        <input
          className='p-3 mx-3'
          type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={handleChange}
        />

        <input
          className='p-3 mx-3'
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={handleChange}
        />

        <input
          className='p-3 mx-3'
          type='password'
          name='password'
          value={password}
          placeholder='password'
          onChange={handleChange}
        />

        <input
          className='p-3 mx-3'
          type='password'
          name='password_confirmation'
          value={password_confirmation}
          placeholder='confirm password'
          onChange={handleChange}
        />

        <button type='submit' className='bg-gray-100 p-3 rounded-md'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
