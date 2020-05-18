import React from 'react';
import * as S from './nav-bar.styles';


const NavBar = () => {
  return (
    <S.NavBar>
      <S.NavButton>Home</S.NavButton>
      <S.NavButton>Add to My Fridge</S.NavButton>
      <S.NavButton>What Can I Make?</S.NavButton>
      <S.NavButton>Pasta Dishes</S.NavButton>
    </S.NavBar>
  );
};

export default NavBar;
