import React, {useContext} from 'react';
import {StyledView} from '../../styled';
import {Context} from '../../Store';
import {
  setPlayersValue,
  setActivePlayer,
  setCurrentPlayers,
} from '../../Actions';
import {Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function PlayersSelect() {
  const [state, dispatch] = useContext(Context);
  const players = [1, 2, 3, 4];

  const statePlayers = [...state.players];
  statePlayers.length = state.playersValue;

  const handleNumberChange = e => {
    dispatch(setPlayersValue(players[e.target.value]));
    const randomPlayer = statePlayers.sort(() => 0.5 - Math.random())[0];
    dispatch(setActivePlayer(randomPlayer));
  };

  function currArrChanged() {
    dispatch(setCurrentPlayers(statePlayers));
  }

  return (
    <StyledView grid gap="15px">
      <StyledView fontSize="25px">
        <Text>Players Number</Text>
      </StyledView>
      <RNPickerSelect
        onChange={handleNumberChange}
        onClick={currArrChanged}
        items={players.map(num => ({
          label: num,
          value: num,
        }))}
      />
    </StyledView>
  );
}

export default PlayersSelect;
