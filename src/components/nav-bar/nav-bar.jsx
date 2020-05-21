import React from 'react';
import * as S from './nav-bar.styles';

import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <S.NavBar>
      <S.NavButton as={Link} to={'/'}>
        Home
      </S.NavButton>
      <S.NavButton as={Link} to={'/fridgebuilder'}>
        Add to My Fridge
      </S.NavButton>
      <S.NavButton as={Link} to={'/whatcanimake'}>
        What Can I Make?
      </S.NavButton>
      <S.NavButton as={Link} to={'/dishes'}>
        Pasta Dishes
      </S.NavButton>
    </S.NavBar>
  );
};

export default NavBar;
