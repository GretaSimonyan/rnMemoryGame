import {StyledView} from '../../styled';
import styled from 'styled-components/native';

const Card = styled(StyledView)`
  width: 100px;
  height: 120px;
  transition: transform 0.5s;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  ${props =>
    props.isFlipped === false
      ? `background: linear-gradient(0deg, rgba(255,33,33,1) 25%, rgba(252,164,41,1) 74%);
    `
      : 'transform: rotateY(180deg); border: solid 2px orange'}
`;

export default Card;
