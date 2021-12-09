import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App(props) {
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [userData, setUserData] = useState({});

  function handleLogin(data) {
    setLoggedInStatus('LOGGED_IN');
    setUserData(data);
  }

  return (
    <div className='flex bg-gray-900 h-screen justify-center pt-10'>
      <Routes>
        <Route
          path={'/'}
          element={
            <Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} />
          }
        />
        <Route
          path={'/dashboard'}
          element={<Dashboard loggedInStatus={loggedInStatus} />}
        />
      </Routes>
    </div>
  );
}

export default App;
