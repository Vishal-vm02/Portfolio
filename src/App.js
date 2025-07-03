import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navabr from './Navbar';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Navabr />
           <section id="Home"><Home /></section>

    </BrowserRouter>
  );
}

export default App;
