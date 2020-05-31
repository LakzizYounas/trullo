import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  selectNewBoardHidden,
  selectBoards,
  selectIsFetchingUserBoards,
} from '../../redux/board/board.selectors';
import { toggleNewBoardHidden } from '../../redux/board/board.actions';

import WithModal from '../with-modal/with-modal.components';
import WithSpinner from '../with-spinner/with-spinner.component';

import {
  BoardsOverviewContainer,
  BoardsOverviewContent,
} from './boards-overview.styles';

import Card from '../card/card.component';
import AddBoard from '../../components/add-board/add-board.component';

const ModalAddBoard = WithModal(AddBoard);
const SpinnerBoardsOverviewContent = WithSpinner(BoardsOverviewContent);

const BoardsOverview = ({ hidden, toggleNewBoardHidden, boards, isLoading }) => (
  <>
    <ModalAddBoard isOpen={!hidden} close={toggleNewBoardHidden} title='New Card' />
    <BoardsOverviewContainer>
      <SpinnerBoardsOverviewContent isLoading={isLoading}>
        {boards.map(({ id, ...otherProps }) => (<Card key={id} hover {...otherProps} />))}
        <Card title='Create new board' hover onClick={toggleNewBoardHidden} />
      </SpinnerBoardsOverviewContent>
    </BoardsOverviewContainer>
  </>
);

BoardsOverview.propTypes = {
  hidden: PropTypes.bool.isRequired,
  toggleNewBoardHidden: PropTypes.func.isRequired,
  boards: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  hidden: selectNewBoardHidden,
  boards: selectBoards,
  isLoading: selectIsFetchingUserBoards,
});

const mapDispatchToProps = dispatch => ({
  toggleNewBoardHidden: () => dispatch(toggleNewBoardHidden()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(BoardsOverview);
