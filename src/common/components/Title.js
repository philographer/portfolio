import styled from "styled-components";
import {appearFadeIn} from "../styles/_keyFrames";

const Title = styled.div`
  animation: ${appearFadeIn} forwards 0.7s ${props => props.delay} ease-out;
  font-size: 20%;
  color: ghostwhite;
  font-family: 'Dosis', sans-serif;
  font-weight: normal;
  overflow: hidden;
  opacity: 0;
 `;

Title.defaultProps = {
  delay: "0s"
};

export default Title;