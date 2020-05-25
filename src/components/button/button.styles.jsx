import styled from 'styled-components';

import { ReactComponent as GoogleSvg } from '../../assets/google_logo.svg';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  ${({google}) => google ? 'background-color: #4285f4' : 'background-color: #4CAF50'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  filter: brightness(90%);

  width: 100%;
  padding: 14px 0px;

  &:hover {
    filter: brightness(1);
  }
`;

export const StyledGoogle = styled(GoogleSvg)`
  height: 30px;
  filter: drop-shadow(1px 1px 1px black);
`;

export const StyledText = styled.div`
  margin: auto 20px;
`;