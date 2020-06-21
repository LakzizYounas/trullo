import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectLastParam } from '../../redux/router/router.selectors';
import { selectBoardByName } from '../../redux/board/board.selectors';

import {
  Header,
  StyledBoard,
} from './board.styles';

const Board = ({ board }) => console.log('board', board) || (
  <StyledBoard imgName={board.imgName}>
    <Header>{'boardName'}</Header>
  </StyledBoard>
);

Board.propTypes = {
  board: PropTypes.any,
};

const mapStateToProps = state => ({
  board: selectBoardByName(selectLastParam(state))(state),
});

export default connect(mapStateToProps)(Board);
