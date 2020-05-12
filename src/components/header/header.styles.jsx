import styled from 'styled-components';

import { ReactComponent as TrulloSvg } from '../../assets/logo.svg';

export const StyledHeader = styled.div`
  background-color: cornflowerblue;
  border-radius: 0 0 15px 15px;
  padding: 4px 0 0 0;
`;

export const Logo = styled(TrulloSvg)`
  height: 40px;
  width: 100%
`;