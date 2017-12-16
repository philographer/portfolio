import styled from "styled-components";

export const FirstPageDiv = styled.div`
  position: absolute;
  height: 210%;
  width: 100%;
  left: -70%;
  transform: rotate(-15deg);
  //background-color: blue;
  
  @media (max-width: 700px) {
    left: -50%
  }
  
  @media (max-width: 480px) {
    left: -40%
  } 
`;