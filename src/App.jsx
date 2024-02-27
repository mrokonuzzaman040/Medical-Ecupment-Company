import React from 'react';
import Navbar from './Home/Common/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Home/Common/Footer/Footer';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;