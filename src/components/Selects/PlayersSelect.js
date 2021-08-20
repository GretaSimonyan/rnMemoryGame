import React, {useContext, useEffect} from 'react';
import {StyledView, StyledText} from '../../styled';
import {Context} from '../../Store';
import {setCurrentPlayers} from '../../Actions';
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
    <StyledView>
      <StyledText fontSize="25px">Players Number</StyledText>
      <RNPickerSelect
        onValueChange={handleNumberChange}
        value={state.playersValue}
        items={players.map((num = state.playersValue) => ({
          label: num.toString(),
          value: num,
        }))}
      />
    </StyledView>
  );
}

export default PlayersSelect;
