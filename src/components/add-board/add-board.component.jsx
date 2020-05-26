import React, { useState, useCallback } from 'react';

import {
  AddBoardContainer,
  BackgroundPicker,
  RightSideContainer,
  StyledBoard,
  Validate,
} from './add-board.styles';

import Card from '../card/card.component';
import TextInput from '../text-input/text-input.component';

const set1 = new Set();

const AddBoard = () => {
  const [board, setBoard] = useState({
    imgName: 2,
    title: '',
  });

  const { imgName, title } = board;

  const handleBackgroundChange = useCallback((imgName) =>
    setBoard({ title, imgName })
  , [title]);

  set1.add(handleBackgroundChange);
  console.log(set1);
  return (
    <AddBoardContainer>
      <StyledBoard imgName={imgName}>
        <TextInput inverted placeholder='Add board title' />
      </StyledBoard>
      <RightSideContainer>
        <BackgroundPicker>
          <Card imgName='1' hover onClick={() => handleBackgroundChange('1')} />
          <Card imgName='2' hover onClick={() => handleBackgroundChange('2')} />
          <Card imgName='3' hover onClick={() => handleBackgroundChange('3')} />
          <Card imgName='4' hover onClick={() => handleBackgroundChange('4')} />
          <Card imgName='5' hover onClick={() => handleBackgroundChange('5')} />
          <Card imgName='6' hover onClick={() => handleBackgroundChange('6')} />
          <Card imgName='7' hover onClick={() => handleBackgroundChange('7')} />
          <Card imgName='8' hover onClick={() => handleBackgroundChange('8')} />
          <Card imgName='9' hover onClick={() => handleBackgroundChange('9')} />
          <Card imgName='10' hover onClick={() => handleBackgroundChange('10')} />
          <Card imgName='11' hover onClick={() => handleBackgroundChange('11')} />
        </BackgroundPicker>
        <Validate text='Valider' />
      </RightSideContainer>
    </AddBoardContainer>
  );
};

export default AddBoard;