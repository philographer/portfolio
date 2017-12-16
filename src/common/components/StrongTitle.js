import styled from "styled-components";

export default styled.strong`
  font-size: ${props => props.size};
  font-family: 'Open Sans', sans-serif;
  color: ${props => props.color || 'ghostwhite'};
`