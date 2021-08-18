/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {Context} from '../../Store';
import {StyledView} from '../../styled';
import Won from '../Won';
import {generate} from './utils';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

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
  }, [cardsNum]);

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
    console.log(card);
    if (!card.canFlip) {
      return;
    }
    dispatch(firstCard ? setSecondCard(card) : setFirstCard(card));
    dispatch(setCardInfo({cardId: card.id, canFlip: false, isFlipped: true}));
  }

  const isDone = cards.every(card => !card.canFlip);

  return (
    <>
      <StyledView id="gameOn" flex fD="row" fW="wrap">
        {cards.map((pic, index) => (
          <TouchableOpacity
            onPress={() => handleClick(pic)}
            style={[
              styles.button,
              {
                transform: [{rotateY: '180deg'}],
                width: 100 / state.width + '%',
              },
            ]}
            key={index + pic}>
            {pic.isFlipped ? (
              <ImageBackground
                accessibilityRole="image"
                source={pic.imageURL}
                resizeMode="contain"
                style={styles.image}
              />
            ) : null}
          </TouchableOpacity>
        ))}
      </StyledView>
      {isDone && <Won />}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 120,
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: '#00ff00',
  },
  button: {
    padding: 1,
    borderRadius: 5,
    borderColor: 'orange',
    backgroundColor: 'orange',
    borderWidth: 2,
    height: 120,
  },
});
export default GameOn;
