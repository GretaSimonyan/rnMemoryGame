import React, {useContext} from 'react';
import {StyledView} from '../../styled';
import {Context} from '../../Store';
import {setHeight} from '../../Actions';
import RNPickerSelect from 'react-native-picker-select';

function BoardHeightSelect() {
  const [state, dispatch] = useContext(Context);
  const heightArr = [2, 3, 4, 5, 6, 7, 8];

  const handleNumberChange = e => {
    dispatch(setHeight(heightArr[e.target.value]));
  };

  return (
    <StyledView grid gTR="1fr 1fr" gap="5px">
      <StyledView fontSize="20px"> Height </StyledView>
      <RNPickerSelect
        onChange={e => handleNumberChange(e)}
        items={heightArr.map((num = state.height) => ({
          label: num,
          value: num,
        }))}
      />
    </StyledView>
  );
}

export default BoardHeightSelect;
