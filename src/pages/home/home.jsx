import React from 'react';
import * as S from './home.styles';

import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <S.Home>
      <S.Welcome>
        {`Buongiorno!  Love Italian pastas?  Ever wonder what you can 
        make with the ingredients in your refrigerator?  Welcome to 
        Pastapedia, your go-to resource for learning how to make 
        simple and delicious pasta dishes!`}
      </S.Welcome>
      <S.NavButtonGroup>
        <S.ButtonLabel>
          {`What you can make with the ingredients you already 
          have?  Simply add ingredients to your fridge and we'll do the 
          rest!`}
        </S.ButtonLabel>
        <S.NavButton as={Link} to='/fridgebuilder'>
          Add Ingredients to Fridge
        </S.NavButton>
      </S.NavButtonGroup>
      <S.NavButtonGroup>
        <S.ButtonLabel>
          {`Want to know more about a particular pasta dish?  Search pasta 
          dishes by name or ingredients and get started!`}
        </S.ButtonLabel>
        <S.NavButton as={Link} to='/dishes'>
          Browse Pasta Recipes
        </S.NavButton>
      </S.NavButtonGroup>
    </S.Home>
  );
}

export default Home;