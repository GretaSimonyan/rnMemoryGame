import React from 'react';
import {StyledView, StyledText} from '../../styled';
import PlayersSelect from './PlayersSelect';
import BoardHeightSelect from './BoardHeightSelect';
import BoardWidthSelect from './BoardWidthSelect';

function Selects() {
  return (
    <StyledView id="selects" justC="space-around" alignI="center">
      <PlayersSelect />
      <StyledView id="bSizeSelect" fD="column">
        <StyledText fontSize="25px">Board Size</StyledText>
        <StyledView justC="space-around" fD="row">
          <BoardHeightSelect />
          <BoardWidthSelect />
        </StyledView>
      </StyledView>
    </StyledView>
  );
}

export default Selects;
