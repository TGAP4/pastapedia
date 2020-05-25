import React, {useState} from 'react';
import * as S from './full-dishes-list.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDishesList} from '../../redux/dishes/dishes.selectors';
import {selectFridgeItems} from '../../redux/fridge/fridge.selectors';

import AsyncDishList from '../../components/async-dish-list/async-dish-list';


const FullDishesList = ({fullDishesList, fridgeItems}) => {
  const [filters, setFilters] = useState({
    searchInput: '',
    ingredient1: '',
    ingredient2: ''
  });
  const {searchInput, ingredient1, ingredient2} = filters;

  const handleChange = event => {
    const {name, value} = event.target;
    setFilters({...filters, [name]: value})
  };

  const ingredientsDropdown = name => {
    return (
      <S.Dropdown name={name} onChange={handleChange}>
        <option value=''>Select Ingredient</option>
        {fridgeItems.map((item, i) => 
          <option key={i} value={item}>
            {item}
          </option>
        )}
      </S.Dropdown>
    );
  };

  const filteredDishList = fullDishesList.filter(dish =>
    dish.title.toLowerCase().includes(searchInput.toLowerCase()) && 
    (dish.ingredients.includes(ingredient1) || !ingredient1) &&
    (dish.ingredients.includes(ingredient2) || !ingredient2)
  );


  return (
    <S.FullListPage>
      <S.Title>List of Pasta Dishes</S.Title>
      <S.Description>
        Italy is home to a wide variety of delicious pasta dishes.  
        Search the list by name, or select up to two ingredients from 
        your fridge to see what recipes use them.  Then, click to 
        learn more about each dish and what goes into it!
      </S.Description>
      <S.Filters>
        <S.SearchBar
          name='searchInput'
          placeholder='Search By Name'
          value={searchInput}
          onChange={handleChange}  
        />
        {ingredientsDropdown('ingredient1')}
        {ingredientsDropdown('ingredient2')}
      </S.Filters>
      <AsyncDishList 
        dishList={filteredDishList}
        displayImages={true}
      />
    </S.FullListPage>
  );
}

const mapState = createStructuredSelector({
  fullDishesList: selectDishesList,
  fridgeItems: selectFridgeItems
});

export default connect(mapState)(FullDishesList);