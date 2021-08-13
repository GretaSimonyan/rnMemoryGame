import React from 'react';
import {StyledView} from '../../styled';
import PlayersSelect from './PlayersSelect';
import BoardHeightSelect from './BoardHeightSelect';
import BoardWidthSelect from './BoardWidthSelect';

function Selects() {
  return (
    <StyledView id="selects" grid gTC="1fr 1fr" justI="center">
      <PlayersSelect />
      <StyledView id="bSizeSelect" grid gap="5px" tAlign="center">
        <StyledView fontSize="25px">Board Size</StyledView>
        <StyledView grid gTC="1fr 1fr" gap="15px">
          <BoardHeightSelect />
          <BoardWidthSelect />
        </StyledView>
      </StyledView>
    </StyledView>
  );
}

export default Selects;
