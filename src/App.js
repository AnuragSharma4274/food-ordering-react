

import Home from './components/home';
import About from './components/About';
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import './components/App.css';
import Contact from './components/Contact';
import { Pizza, Burger, Drinks, Sandwich, Cb, Cakes } from './components/Rest'
import './components/About.css';
import './components/Contact.css'




function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/Pizza' element={<Pizza />} />
          <Route path='/Burger' element={<Burger />} />
          <Route path='/Drinks' element={<Drinks />} />
          <Route path='/Sandwich' element={<Sandwich />} />
          <Route path='/Chhole bhature' element={<Cb />} />
          <Route path='/Cakes' element={<Cakes />} />

        </Routes>





      </BrowserRouter>
    </div>




  );
}

export default App;
