import React, {useContext} from 'react';
import {StyledView, StyledText} from '../../styled';
import {Context} from '../../Store';
import {setWidth} from '../../Actions';
import RNPickerSelect from 'react-native-picker-select';

function BoardWidthSelect() {
  const [state, dispatch] = useContext(Context);
  const widthArr = [2, 3, 4];

  const handleNumberChange = value => {
    dispatch(setWidth(+value));
  };

  return (
    <StyledView flex fD="column">
      <StyledText fontSize="20px"> Width </StyledText>
      <RNPickerSelect
        onValueChange={handleNumberChange}
        value={state.width}
        items={widthArr.map((num = state.width) => ({
          label: num.toString(),
          value: num,
        }))}
      />
    </StyledView>
  );
}

export default BoardWidthSelect;
