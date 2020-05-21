import React, {useEffect} from 'react';
import * as S from './App.styles';

import {Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchDishesStart} from './redux/dishes/dishes.actions';


import BannerImage from './components/banner-image/banner-image';
import NavBar from './components/nav-bar/nav-bar';
import FridgeSidebar from './components/fridge-sidebar/fridge-sidebar';
import Home from './pages/home/home';
import FridgeBuilder from './pages/fridge-builder/fridge-builder';
import WhatCanIMake from './pages/what-can-i-make/what-can-i-make';
import Dishes from './pages/dishes/dishes';


const App = ({fetchDishesStart}) => {
  useEffect(() => {
    fetchDishesStart()
  }, [fetchDishesStart]);

  return (
    <S.App>
      <BannerImage />
      <FridgeSidebar />
      <NavBar />
      <S.Pages>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/fridgebuilder' component={FridgeBuilder} />
          <Route exact path='/whatcanimake' component={WhatCanIMake} />
          <Route path='/dishes' component={Dishes} />
        </Switch>
      </S.Pages>
    </S.App>
  );
}

const mapDispatch = dispatch => ({
  fetchDishesStart: () => dispatch(fetchDishesStart())
});

export default connect(null, mapDispatch)(App);
