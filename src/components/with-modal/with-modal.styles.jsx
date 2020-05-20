import styled from 'styled-components';

export const StyledModal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const Content = styled.div`
  background-color: #1A2F54;
  box-shadow: 3px 3px 3px grey;
  border: 1px solid #888;
  border-radius: 5px;
  margin: 15% auto;
  padding: 20px;
  width: 50%;
`;
