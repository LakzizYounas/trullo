import styled from 'styled-components';

import { ReactComponent as TrulloSvg } from '../../assets/logo.svg';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #026AA7;
  padding: 5px 0 5px 0;
`;

export const LeftContainer = styled.div`
  width: 33%;
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

export const StyledDisplayName = styled.div`
  margin: 10px 10px 0 10px;
  font: italic 1.2em "Fira Sans", serif;
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

export const StyledSignIn = styled.div`
  width: 30%;
  height: 50%;
  border: 1px solid white;
  border-radius: 5px;
  margin: 0 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #0a71ad;
  }
`;
