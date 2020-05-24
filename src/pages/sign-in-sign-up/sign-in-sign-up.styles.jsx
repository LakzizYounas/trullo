import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px auto 0;
  width: 1000px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
