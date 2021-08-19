import React, {useContext} from 'react';
import {StyledView} from '../../styled';
import {Context} from '../../Store';
import {Text} from 'react-native';

function PlayersNumber() {
  const [state] = useContext(Context);

  return (
    <StyledView id="playersNumber" w="100%" justC="space-around" fD="row">
      <StyledView margin="auto">
        {state.currentPlayers.map((item = state.activePlayer, key) => (
          <StyledView key={key}>
            <Text>
              Player {item.title} : {item.point}
            </Text>
          </StyledView>
        ))}
      </StyledView>
      <StyledView margin="auto">
        <Text>Current Player: {state.activePlayer.title}</Text>
      </StyledView>
    </StyledView>
  );
}

export default PlayersNumber;
