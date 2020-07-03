import styled from 'styled-components';

import { ReactComponent as TrulloSvg } from '../../assets/logo.svg';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: ${({theme}) => theme.main};
  padding: 5px 0 5px 0;
`;

export const LeftContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const StyledDisplayName = styled.div`
  width: min-content;
  margin-left: auto;
  font: italic 1.2em "Fira Sans", serif;
  
`;

export const Logo = styled(TrulloSvg)`
  height: 40px;
  width: 130px;

  &:hover {
    cursor: pointer;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  line-height: 40px;
  height: 100%;
  width: 33%;
  color: white;
`;

export const StyledSignOut = styled.div`
  height: 50%;
  margin: 0 10px;
  padding: 0 10px;
  border: 1px solid white;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;