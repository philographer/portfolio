import styled from "styled-components";

const SecondPageDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export default SecondPageDiv;