import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeroSection from './components/section/hero-section/HeroSection';
import Localisation from './components/section/map-section/Localisation';
import Menu from './components/section/menu-section/Menu';

const Main = ({theme}) => {

  return (
    <Routes>
      <Route path='/' element={<HeroSection theme={theme}/>} />
      <Route path='/localisation' element={<Localisation theme={theme}/>} />
      <Route path='/Menu' element={<Menu  theme={theme}/>}/>
    </Routes>
  );
}

export default Main;