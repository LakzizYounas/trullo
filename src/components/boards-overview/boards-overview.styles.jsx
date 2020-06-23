import styled from 'styled-components';

export const BoardsOverviewContainer = styled.div`
  width: 100%;
  height: 53vh;
  border-radius: 5px;
  box-shadow: 0 0 10px grey;
  margin: 80px auto 0 auto;
  padding: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  @media screen and (max-width: 1100px) {
    width: 80%;
  }
`;

export const BoardsOverviewContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  column-gap: 40px;
  row-gap: 40px;

  justify-content: center;
  justify-items: stretch;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;