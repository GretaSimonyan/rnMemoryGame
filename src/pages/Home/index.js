import React, {useContext} from 'react';
import {Context} from '../../Store';
import {setView} from '../../Actions';
import {StyledView} from '../../styled';
import {Header, Selects, Board} from '../../components';
import Link from '../../components/StylesComp/Link';

function Home() {
  const [state, dispatch] = useContext(Context);
  function handlClick(e) {
    dispatch(setView(e.target.outerText));
  }

  return (
    <>
      <Header />
      <StyledView
        grid
        gTC="1fr 1fr"
        m="20px auto"
        justI="center"
        gap="20px 20px"
        fontSize="14px"
        alignI="stretch">
        <Link href="/selects" onClick={handlClick}>
          CHANGE SELECTION
        </Link>
        <Link href="/board" onClick={handlClick}>
          PLAY GAME
        </Link>
      </StyledView>
      {state.view === 'CHANGE SELECTION' ? <Selects /> : <Board />}
    </>
  );
}
export default Home;
