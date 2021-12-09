// import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Registration from '../components/auth/Registration';

const Home = (props) => {
  let navigate = useNavigate();

  function handleSuccessfullAuth(data) {
    // TODO update parent component
    props.handleLogin(data);
    navigate('/dashboard', { state: { from: { pathname: '/registrations' } } });
  }

  return (
    <div>
      <h1 className='text-white text-6xl'>Home</h1>
      <h2 className='text-white text-4xl'>Status: {props.loggedInStatus}</h2>
      <Registration handleSuccessfullAuth={handleSuccessfullAuth} />
    </div>
  );
};

export default Home;
