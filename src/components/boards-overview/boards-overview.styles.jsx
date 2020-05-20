import styled from 'styled-components';

export const StyledBoardsOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  justify-content: center;
  justify-items: stretch;

  background-color: #262e59;
  width: 1000px;
  height: 60vh;
  border-radius: 5px;
  margin: 80px auto 0 auto;
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
