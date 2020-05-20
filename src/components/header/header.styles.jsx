import styled from 'styled-components';

import { ReactComponent as TrulloSvg } from '../../assets/logo.svg';

export const StyledHeader = styled.div`
  background-color: #1A2F54;
  border-radius: 0 0 5px 5px;
  padding: 4px 0 0 0;
`;

export const Logo = styled(TrulloSvg)`
  height: 40px;
  width: 100%
`;