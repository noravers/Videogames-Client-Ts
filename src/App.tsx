import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import Form from './components/Form/Form';
import ButtonGame from './components/ButtonGame/ButtonGame';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/videogame/:id' element={<VideogameDetail />} />
        <Route path='/addGame' element={<Form />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App;
