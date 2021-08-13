import React, {useContext, useEffect} from 'react';
import {Context} from '../../Store';
import {StyledView} from '../../styled';
import Card from '../StylesComp/Card';
import Won from '../Won';
import {columns, rows, generate} from './utils';
import {Text} from 'react-native';

import {
  setActivePlayer,
  setFirstCard,
  setSecondCard,
  setCards,
  setCardInfo,
  resetChoosenCards,
  incrementActivePlayerPoint,
} from '../../Actions';

function GameOn() {
  const [state, dispatch] = useContext(Context);

  let cardsNum = state.height * state.width;

  useEffect(() => {
    if (cardsNum % 2) {
      alert('Multiple width and height values must be Even number');
    } else {
      dispatch(setCards(generate(cardsNum)));
    }
  }, [cardsNum, dispatch]);

  const {cards, firstCard, secondCard} = state;

  function onSuccessGuess() {
    dispatch(
      setCardInfo({cardId: firstCard.id, canFlip: false, isFlipped: true}),
    );
    dispatch(
      setCardInfo({cardId: secondCard.id, canFlip: false, isFlipped: true}),
    );
    dispatch(resetChoosenCards());
    dispatch(incrementActivePlayerPoint());
  }

  function onFailureGuess() {
    setTimeout(() => {
      dispatch(
        setCardInfo({cardId: firstCard.id, canFlip: true, isFlipped: false}),
      );
      dispatch(
        setCardInfo({cardId: secondCard.id, canFlip: true, isFlipped: false}),
      );
    }, 1000);
    dispatch(resetChoosenCards());

    setNextPlayer();
  }

  function setNextPlayer() {
    const indexOfActivePlayer = state.currentPlayers.findIndex(
      player => player.title === state.activePlayer.title,
    );

    dispatch(
      setActivePlayer(
        indexOfActivePlayer < state.currentPlayers.length - 1
          ? state.currentPlayers[indexOfActivePlayer + 1]
          : state.currentPlayers[0],
      ),
    );
  }

  useEffect(() => {
    if (!firstCard || !secondCard) {
      return;
    }
    if (
      firstCard.imageURL === secondCard.imageURL &&
      firstCard.id !== secondCard.id
    ) {
      onSuccessGuess();
    } else {
      onFailureGuess();
    }
  }, [firstCard, onFailureGuess, onSuccessGuess, secondCard]);

  function handleClick(card) {
    if (!card.canFlip) {
      return;
    }
    dispatch(firstCard ? setSecondCard(card) : setFirstCard(card));
    dispatch(setCardInfo({cardId: card.id, canFlip: false, isFlipped: true}));
  }

  const isDone = cards.every(card => !card.canFlip);

  return (
    <>
      <StyledView
        id="gameOn"
        grid
        gap="5px 5px"
        gTC={columns(state.width)}
        gTR={rows(state.height)}>
        {cards.map((pic, index) => (
          <Card
            bgImg={pic.imageURL}
            key={pic + index}
            onClick={() => handleClick(pic)}
            isFlipped={pic.isFlipped}
          />
        ))}
      </StyledView>
      <Text>{isDone && <Won />}</Text>
    </>
  );
}

export default GameOn;
