import React, {useContext} from 'react';
import {Context} from '../../Store';
import {setView} from '../../Actions';
import {StyledView} from '../../styled';
import Header from '../../components/Header';
import Selects from '../../components/Selects';
import Board from '../../components/Board';
import Link from '../../components/StylesComp/Link';

function Home() {
  const [state, dispatch] = useContext(Context);

  function handlClick(text) {
    dispatch(setView(text));
  }

  return (
    <>
      <Header />
      <StyledView
        fD="row"
        w="100%"
        m="20px auto"
        fontSize="14px"
        justC="space-around">
        <Link onPress={() => handlClick('CHANGE')}>CHANGE SELECTION</Link>
        <Link onPress={() => handlClick('PLAY')}>PLAY GAME</Link>
      </StyledView>
      {state.view === 'CHANGE' ? <Selects /> : <Board />}
    </>
  );
}
export default Home;
