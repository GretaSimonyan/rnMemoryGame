import React from 'react';
import {StyledText, StyledView} from '../../styled';

function Header() {
  return (
    <StyledView flex justC="center" fD="row">
      <StyledText p="20px 0" fontSize="30px" c="orange">
        Memory
      </StyledText>
    </StyledView>
  );
}

export default Header;
