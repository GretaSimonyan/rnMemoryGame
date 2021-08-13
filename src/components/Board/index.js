import React from 'react';
import {StyledView} from '../../styled';
import PlayersNumber from '../PlayersNumber';
import GameOn from '../GameOn';

function Board() {
  return (
    <StyledView
      id="board"
      grid
      gTC="1fr"
      gap="10px 0"
      justI="center"
      alignI="center"
      gTR="50px auto auto">
      <PlayersNumber />
      <GameOn />
    </StyledView>
  );
}

export default Board;
