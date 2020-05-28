import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectNewBoardHidden, selectBoards } from '../../redux/board/board.selectors';
import { toggleNewBoardHidden } from '../../redux/board/board.actions';

import WithModal from '../with-modal/with-modal.components';

import {
  StyledBoardsOverview,
} from './boards-overview.styles';

import Card from '../card/card.component';
import AddBoard from '../../components/add-board/add-board.component';

const ModalAddBoard = WithModal(AddBoard);

const BoardsOverview = ({ hidden, toggleNewBoardHidden, boards }) => (
  <>
    <ModalAddBoard isOpen={!hidden} close={toggleNewBoardHidden} title='New Card' />
    <StyledBoardsOverview>
      {boards.map(({ id, ...otherProps }) => (<Card key={id} hover {...otherProps} />))}
      <Card title='Create new board' hover onClick={toggleNewBoardHidden} />
    </StyledBoardsOverview>
  </>
);

BoardsOverview.propTypes = {
  hidden: PropTypes.bool.isRequired,
  toggleNewBoardHidden: PropTypes.func.isRequired,
  boards: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  hidden: selectNewBoardHidden,
  boards: selectBoards,
});

const mapDispatchToProps = dispatch => ({
  toggleNewBoardHidden: () => dispatch(toggleNewBoardHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsOverview);
