import styled from 'styled-components';

import BoardsOverview from '../../components/boards-overview/boards-overview.component';

export const StyledHomepage = styled.div`
  display: flex;
  height: 80vh;
`;

export const StyledBoardsOverview = styled(BoardsOverview)`
  background-color: #1d2b70;
  width: 1000px;
  height: 70%;
  margin: 80px auto 0 auto;
  border-radius: 15px;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;
