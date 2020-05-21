import React from 'react';
import * as S from './full-dishes-list.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDishesList} from '../../redux/dishes/dishes.selectors';

import AsyncDishList from '../../components/async-dish-list/async-dish-list';


const FullDishesList = ({fullDishesList}) => {
  return (
    <S.FullListPage>
      <S.Title>List of Pasta Dishes</S.Title>
      <S.Description>Italy is home to a wide variety of delicious pasta dishes.  Click to learn more about each dish and what goes into it!</S.Description>
      <AsyncDishList 
        dishList={fullDishesList}
        displayImages={true}
      />
    </S.FullListPage>
  );
}

const mapState = createStructuredSelector({
  fullDishesList: selectDishesList
});

export default connect(mapState)(FullDishesList);