import React, {useContext, useEffect} from 'react';
import {StyledView} from '../../styled';
import {Context} from '../../Store';
import {setCurrentPlayers} from '../../Actions';
import {Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function PlayersSelect() {
  const [state, dispatch] = useContext(Context);
  const players = [1, 2, 3, 4];

  useEffect(() => {
    dispatch(setCurrentPlayers(state.playersValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNumberChange = value => {
    dispatch(setCurrentPlayers(+value));
  };

  return (
    <StyledView flex fD="column">
      <StyledView fontSize="25px">
        <Text>Players Number</Text>
      </StyledView>
      <RNPickerSelect
        onValueChange={handleNumberChange}
        value={state.playersValue}
        items={players.map(num => ({
          label: num.toString(),
          value: num,
        }))}
      />
    </StyledView>
  );
}

export default PlayersSelect;
