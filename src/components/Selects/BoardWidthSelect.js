import React, {useContext} from 'react';
import {StyledView} from '../../styled';
import {Context} from '../../Store';
import {setWidth} from '../../Actions';
import RNPickerSelect from 'react-native-picker-select';

function BoardWidthSelect() {
  const [state, dispatch] = useContext(Context);
  const widthArr = [2, 3, 4, 5, 6, 7, 8];

  const handleNumberChange = e => {
    dispatch(setWidth(widthArr[e.target.value]));
  };

  return (
    <StyledView grid gTR="1fr 1fr" gap="5px">
      <StyledView fontSize="20px"> Width </StyledView>
      <RNPickerSelect
        onChange={e => handleNumberChange(e)}
        items={widthArr.map((num = state.width) => ({
          label: num,
          value: num,
        }))}
      />
    </StyledView>
  );
}

export default BoardWidthSelect;
