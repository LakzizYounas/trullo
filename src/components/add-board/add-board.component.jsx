import React from 'react';

import {
  AddBoardContainer,
  BackgroundPicker,
  RightSideContainer,
  StyledBoard,
  Validate,
} from './add-board.styles';

import Card from '../card/card.component';
import TextInput from '../text-input/text-input.component';

const AddBoard = () => {
  return (
    <AddBoardContainer>
      <StyledBoard imgName='1'>
        <TextInput inverted placeholder='Add board title' />
      </StyledBoard>
      <RightSideContainer>
        <BackgroundPicker>
          <Card imgName='1' hover />
          <Card imgName='2' hover />
          <Card imgName='3' hover />
          <Card imgName='4' hover />
          <Card imgName='5' hover />
          <Card imgName='6' hover />
          <Card imgName='7' hover />
          <Card imgName='8' hover />
          <Card imgName='9' hover />
          <Card imgName='10' hover />
          <Card imgName='11' hover />
        </BackgroundPicker>
        <Validate text='Valider' />
      </RightSideContainer>
    </AddBoardContainer>
  );
};

export default AddBoard;