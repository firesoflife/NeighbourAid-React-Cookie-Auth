import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <h1 className='text-white text-6xl'>Dashboard</h1>
      <h2 className='text-white text-4xl'>{props.loggedInStatus}</h2>
    </div>
  );
};

export default Dashboard;
