import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import range from '../../utils/range';
import { addBoardStart } from '../../redux/board/board.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Card from '../card/card.component';
import TextInput from '../text-input/text-input.component';

import {
  AddBoardContainer,
  BackgroundPicker,
  RightSideContainer,
  StyledBoard,
  Validate,
} from './add-board.styles';

const AddBoard = ({ addBoard, currentUser }) => {
  console.log('add board');
  const [boardInfos, setBoardInfos] = useState({
    imgName: '2',
    title: '',
  });

  const { imgName, title } = boardInfos;

  const handleBackgroundChange = useCallback((imgName) =>
    setBoardInfos({ imgName, title })
  , [title]);

  const handleTitleChange = useCallback((title) =>
    setBoardInfos({ imgName, title })
  , [imgName]);

  return (
    <AddBoardContainer>
      <StyledBoard imgName={imgName}>
        <TextInput inverted placeholder='Add board title' value={title}
          onChange={({target: { value }}) => handleTitleChange(value)}
        />
      </StyledBoard>
      <RightSideContainer>
        <BackgroundPicker>
          {[...range(1, 11)].map(e => e.toString()).map(e =>
            <Card key={e} imgName={e} hover
              onClick={() => handleBackgroundChange(e)} />
          )}
        </BackgroundPicker>
        <Validate text='Valider'
          onClick={() => addBoard({ ...boardInfos, user: currentUser.id })}/>
      </RightSideContainer>
    </AddBoardContainer>
  );
};

AddBoard.propTypes = {
  addBoard: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  addBoard: (boardInfos) => dispatch(addBoardStart(boardInfos)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBoard);