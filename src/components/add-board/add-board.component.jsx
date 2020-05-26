import React, { useState, useCallback } from 'react';

import range from '../../utils/range';

import Card from '../card/card.component';
import TextInput from '../text-input/text-input.component';

import {
  AddBoardContainer,
  BackgroundPicker,
  RightSideContainer,
  StyledBoard,
  Validate,
} from './add-board.styles';

const AddBoard = () => {
  const [board, setBoard] = useState({
    imgName: 2,
    title: '',
  });

  const { imgName, title } = board;

  const handleBackgroundChange = useCallback((imgName) =>
    setBoard({ title, imgName })
  , [title]);

  return (
    <AddBoardContainer>
      <StyledBoard imgName={imgName}>
        <TextInput inverted placeholder='Add board title' />
      </StyledBoard>
      <RightSideContainer>
        <BackgroundPicker>
          {[...range(1, 11)].map(e =>
            <Card key={e} imgName={e} hover onClick={() => handleBackgroundChange(e)} />
          )}
        </BackgroundPicker>
        <Validate text='Valider' />
      </RightSideContainer>
    </AddBoardContainer>
  );
};

export default AddBoard;