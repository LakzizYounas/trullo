import styled from 'styled-components';

import { ReactComponent as TrulloSvg } from '../../assets/logo.svg';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #026AA7;
  padding: 5px 0 5px 0;
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
`;

export const StyledDisplayName = styled.div`
  margin: 0 10px;
`;

export const StyledSignOut = styled.div`
  width: 40%;
  height: 50%;
  color: grey;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const LeftContainer = styled.div`
  width: 33%;
`;

export const StyledSignIn = styled.div`
  width: 30%;
  height: 50%;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  margin: 0 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #0a71ad;
  }
`;
