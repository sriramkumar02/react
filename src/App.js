import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 👈 Remove BrowserRouter here
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
