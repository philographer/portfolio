import styled from "styled-components";
import {appearFadeInFromRight} from "../styles/_keyFrames";

export default styled.div`
  background: rgba(49,53,76,.12);
  opacity: 0;
  animation: ${appearFadeInFromRight} forwards 0.7s ${props => props.delay};
  font-size: 0.5em;
  color: ghostwhite;
  font-family: 'Press Start 2P', cursive;
  left: 0%;
  margin-top: 20%;
  
  @media (max-width: 700px) {
    font-size: 0.2em;
  }
  //width: 100%;
`;