import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      {/* <NavbarMenu /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;