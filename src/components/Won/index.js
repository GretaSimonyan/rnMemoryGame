import React, {useContext, useEffect} from 'react';
import {Context} from '../../Store';
import {setWinner} from '../../Actions';
import {StyledView, StyledText} from '../../styled';
import Button from '../StylesComp/Button.js';

function Won() {
  const [state, dispatch] = useContext(Context);

  let points = [];
  state.currentPlayers.map(curr => points.push(curr.point));

  useEffect(() => {
    dispatch(
      setWinner(
        state.currentPlayers.find(cur => cur.point === Math.max(...points)),
      ),
    );
  }, [dispatch, points, state.currentPlayers]);

  return (
    <StyledView
      id="Won"
      z="4"
      w="50%"
      m="auto"
      p="20px"
      bRad="4px"
      left="0px"
      right="0px"
      pos="absolute"
      tAlign="center"
      bgColor="orange"
      overflow="hidden">
      <StyledView flex fD="column" alignI="center" fontSize="30px">
        <StyledText c="azure">
          Congratulations Player {state.winner.title}
        </StyledText>
        <StyledText c="azure">
          You win by gaining {state.winner.point} points
        </StyledText>
        <Button href="/"> Restart </Button>
      </StyledView>
    </StyledView>
  );
}

export default Won;
