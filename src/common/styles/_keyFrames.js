import {keyframes} from "styled-components";

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const appear = keyframes`
  0%,100% { transform: translateX(0em); }
  30% { transform: translateX(5em); }
`;

const appearFadeIn = keyframes`
  0%{ 
    transform: translateX(-2em);
    opacity: 0; 
  }
  50% { 
    transform: translateX(7em);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0em);
    opacity: 1;
  }
`;

const appearFadeInFromRight = keyframes`
  0%{ 
    transform: translateX(10em);
    opacity: 0; 
  }
  100% {
    transform: translateX(0em);
    opacity: 1;
  }
`;

const width = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const height = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`

const cursorBlink = keyframes`
  from, to {border-color: transparent}
  50% {border-color: black}
`


export {rotate360, appear, appearFadeIn, appearFadeInFromRight, width, height, cursorBlink};