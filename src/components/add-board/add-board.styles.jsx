import styled from 'styled-components';

import Card from '../card/card.component';
import Button from '../button/button.component';

export const AddBoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 220px;
`;

export const StyledBoard = styled(Card)`
  width: 60%;
  padding: 20px;
`;

export const BackgroundPicker = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 50px;
  column-gap: 5px;
  row-gap: 5px;

  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
`;

export const Validate = styled(Button)`
`;