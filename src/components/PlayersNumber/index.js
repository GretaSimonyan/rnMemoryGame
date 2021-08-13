import React, {useContext} from 'react';
import {StyledView} from '../../styled';
import {Context} from '../../Store';
import {Text} from 'react-native';

function PlayersNumber() {
  const [state] = useContext(Context);

  return (
    <StyledView id="playersNumber" grid gTC="1fr 1fr" gTR="1fr" gap="200px">
      <StyledView>
        {state.currentPlayers.map((item = state.activePlayer, key) => (
          <StyledView key={key}>
            <Text>
              Player {item.title} : {item.point}
            </Text>
          </StyledView>
        ))}
      </StyledView>
      <StyledView>
        <Text>Current Player: {state.activePlayer.title}</Text>
      </StyledView>
    </StyledView>
  );
}

export default PlayersNumber;
