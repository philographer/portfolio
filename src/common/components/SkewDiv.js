import styled from "styled-components";
import {width} from "../styles/_keyFrames";

export default styled.div`
  animation: ${width} forwards 2s ease-out;
  transform: rotate(20deg);
  padding-top: 10%;
  padding-bottom: 15%;
  overflow: hidden;
`;