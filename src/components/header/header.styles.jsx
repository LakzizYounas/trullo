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
  width: 100%;
`;

export const StyledDisplayName = styled.div`
  width: 33%;
  white-space: nowrap;
  display: table-cell;
  text-align: center;
  line-height: 40px;
`;

export const Placeholder = styled.div`
  width: 33%;
`;