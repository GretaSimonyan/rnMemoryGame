import React from 'react';
import {StyledView} from '../../styled';
import PlayersNumber from '../PlayersNumber';
import GameOn from '../GameOn';

function Board() {
  return (
    <StyledView
      id="board"
      flex
      alignI="center"
      fD="column"
      justC="space-around">
      <PlayersNumber />
      <GameOn />
    </StyledView>
  );
}

export default Board;
