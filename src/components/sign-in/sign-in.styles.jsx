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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledOr = styled.div`
  margin: 10px 0;
`;