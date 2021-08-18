import React, {useContext} from 'react';
import {StyledView, StyledText} from '../../styled';
import {Context} from '../../Store';
import {setHeight} from '../../Actions';
import RNPickerSelect from 'react-native-picker-select';

function BoardHeightSelect() {
  const [state, dispatch] = useContext(Context);
  const heightArr = [2, 3, 4, 5, 6];

  const handleNumberChange = value => {
    dispatch(setHeight(+value));
  };

  return (
    <StyledView flex fD="column">
      <StyledText fontSize="20px"> Height </StyledText>
      <RNPickerSelect
        onValueChange={handleNumberChange}
        value={state.height}
        items={heightArr.map((num = state.height) => ({
          label: num.toString(),
          value: num,
        }))}
      />
    </StyledView>
  );
}

export default BoardHeightSelect;
