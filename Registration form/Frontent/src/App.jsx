import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path='/main' element=<Home /> />
    </Routes>
  );
}

export default App;
