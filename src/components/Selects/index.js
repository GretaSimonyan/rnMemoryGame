import React from 'react';
import {StyledView, StyledText} from '../../styled';
import PlayersSelect from './PlayersSelect';
import BoardHeightSelect from './BoardHeightSelect';
import BoardWidthSelect from './BoardWidthSelect';

function Selects() {
  return (
    <StyledView id="selects" justC="space-around" alignI="center">
      <PlayersSelect />
      <StyledText fontSize="25px" mT="10px">
        Board Size
      </StyledText>
      <BoardHeightSelect />
      <BoardWidthSelect />
    </StyledView>
  );
}

export default Selects;
