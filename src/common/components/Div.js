import styled from "styled-components";

export default styled.div`
   height: 100%;
   background-color: ${props => props.backgroundColor || 'transparent'};
   z-index: 200;
   position: relative;
`;