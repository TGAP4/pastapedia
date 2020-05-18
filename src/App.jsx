import React from 'react';
import * as S from './App.styles';

import Home from './pages/home/home';
import BannerImage from './components/banner-image/banner-image';
import NavBar from './components/nav-bar/nav-bar';
import FridgeSidebar from './components/fridge-sidebar/fridge-sidebar';
import FridgeBuilder from './pages/fridge-builder/fridge-builder';


const App = () => {
  return (
    <S.App>
      <BannerImage />
      <FridgeSidebar />
      <NavBar />
      <S.Pages>
        {/* <Home /> */}
        <FridgeBuilder />
      </S.Pages>
    </S.App>
  );
}

export default App;
