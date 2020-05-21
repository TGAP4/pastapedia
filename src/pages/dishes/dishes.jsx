import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsFetchingDishes} from '../../redux/dishes/dishes.selectors';

import FullDishesList from '../../pages/full-dishes-list/full-dishes-list';
import DishProfile from '../../pages/dish-profile/dish-profile';


const Dishes = ({match, isFetchingDishes}) => {
  if (isFetchingDishes) return null;

  return (
    <>
      <Route exact path={match.path} component={FullDishesList} />
      <Route path={`${match.path}/:dishTitle`} component={DishProfile} />
    </>
  );
};

const mapState = createStructuredSelector({
  isFetchingDishes: selectIsFetchingDishes 
});

export default connect(mapState)(Dishes);