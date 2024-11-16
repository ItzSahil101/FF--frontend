import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Result from './components/Result';

const App = () => {
  return (
    <div className='whole'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/res' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
