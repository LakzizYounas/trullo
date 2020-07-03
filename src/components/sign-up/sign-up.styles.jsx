import styled from 'styled-components';

import TextInput from '../text-input/text-input.component';

export const StyledContainer = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 10px #e0dbdb;
  padding: 40px;
  width: 40%;
  background-color: ${({theme}) => theme.primary};

  @media screen and (max-width: 1100px) {
    margin-bottom: 40px;
    width: 60%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const StyledInput = styled(TextInput)`
  margin-bottom: 20px;
`;
