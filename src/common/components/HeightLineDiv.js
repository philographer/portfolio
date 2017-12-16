import {height} from "../styles/_keyFrames";
import styled from "styled-components";

export default styled.div`
  position: absolute;
  right: 0;
  top: 0;
  border-left: 2px solid white;
  height: 0%;
  animation: ${height} forwards 3s ease-out;
  z-index: -100
`;