import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <div>
      <h1>Hello Friend</h1>
      <Link to="/greeting">Welcome</Link>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  )
};

export default App;