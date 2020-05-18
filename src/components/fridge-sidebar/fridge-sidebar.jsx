import React from 'react';
import * as S from './fridge-sidebar.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectFridgeItems} from '../../redux/fridge/fridge.selectors';


const FridgeSidebar = ({fridgeItems}) => {
  return (
    <>
      <S.Sidebar>
        <S.Title>My Fridge:</S.Title>
        <S.FridgeItems>
          {fridgeItems.map(item =>
            <div>ITEM</div>
          )}
        </S.FridgeItems>
      </S.Sidebar>
    </>
  );
}

const mapState = createStructuredSelector({
  fridgeItems: selectFridgeItems
});

export default connect(mapState)(FridgeSidebar);