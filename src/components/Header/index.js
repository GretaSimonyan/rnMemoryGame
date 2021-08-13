import React from 'react';
import {StyledView} from '../../styled';
import {Text} from 'react-native';

function Header() {
  return (
    <StyledView p="20px 0" fontSize="30px">
      <StyledView flex justC="center" c="orange">
        <Text>Memory</Text>
      </StyledView>
    </StyledView>
  );
}

export default Header;
