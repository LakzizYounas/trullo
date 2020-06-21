import styled from 'styled-components';

import { ReactComponent as CrossSvg } from '../../assets/circle_cross.svg';

export const StyledModal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

export const Content = styled.div`
  background-color: rgba(214, 241, 255, 0.95);
  box-shadow: 5px 5px 10px black;
  border: 1px solid #888;
  border-radius: 5px;

  margin: 15% auto;
  padding: 20px;
  width: 50%;
  height: 300px;

  @media screen and (max-width: 1100px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  margin: auto;
`;

export const Cross = styled(CrossSvg)`
  height: 30px;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;
