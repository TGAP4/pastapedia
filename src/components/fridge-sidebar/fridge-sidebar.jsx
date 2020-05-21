import React from 'react';
import * as S from './fridge-sidebar.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectFridgeItems} from '../../redux/fridge/fridge.selectors';
import {deleteItem} from '../../redux/fridge/fridge.actions';


const FridgeSidebar = ({fridgeItems, deleteItem}) => {
  return (
    <>
      <S.Sidebar>
        <S.Title>My Fridge</S.Title>
        <S.FridgeItems>
          {fridgeItems.map((item, i) =>
            <S.FridgeItem key={i} item={item}>
              {item}
              <S.DeleteButton onClick={() => deleteItem(item)}>
                &#10005;
              </S.DeleteButton>
            </S.FridgeItem>
          )}
        </S.FridgeItems>
      </S.Sidebar>
    </>
  );
}

const mapState = createStructuredSelector({
  fridgeItems: selectFridgeItems
});

const mapDispatch = dispatch => ({
  deleteItem: item => dispatch(deleteItem(item))
});

export default connect(mapState, mapDispatch)(FridgeSidebar);