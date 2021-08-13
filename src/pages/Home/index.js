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
        flex
        m="20px auto"
        fontSize="14px"
        justC="space-around"
        alignI="stretch">
        <Link
          // href="/selects"
          onPress={handlClick}>
          CHANGE SELECTION
        </Link>
        <Link
          // href="/board"
          onPress={handlClick}>
          PLAY GAME
        </Link>
      </StyledView>
      {/* {state.view === 'CHANGE SELECTION' ? <Selects /> : <Board />} */}
    </>
  );
}
export default Home;
