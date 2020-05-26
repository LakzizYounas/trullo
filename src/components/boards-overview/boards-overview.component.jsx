import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectNewBoardHidden } from '../../redux/board/board.selectors';
import { toggleNewBoardHidden } from '../../redux/board/board.actions';

import WithModal from '../with-modal/with-modal.components';

import {
  StyledBoardsOverview,
} from './boards-overview.styles';

import Card from '../card/card.component';
import AddBoard from '../../components/add-board/add-board.component';

const ModalAddBoard = WithModal(AddBoard);

const boards = [
  { id: 'azedzdeaz', imgName: '1', users: [], text: 'Mon giga board' },
  { id: 'qsdaddsq', imgName: '2', users: [], text: 'board2' },
  { id: 'gerzsgrdf', imgName: '3', users: [], text: 'autre board' },
  { id: 'ezrdsvxcv', imgName: '4', users: [], text: 'un boardel' },
  // { id: 'ezswdftg', imgName: '5', users: [], text: 'board5' },
  // { id: 'juyjtrhreg', imgName: '6', users: [], text: 'boardeciel' },
  // { id: 'gtrdfvbrestg', imgName: '7', users: [], text: 'ababoard' },
  // { id: 'rztsergwds', imgName: '8', users: [], text: 'babord' },
  // { id: 'vdsfqbbx', imgName: '9', users: [], text: 'boardragon' },
  // { id: 'htyjtyw', imgName: '10', users: [], text: 'bordelit' },
  // { id: 'aqsfergze', imgName: '11', users: [], text: 'boardefalaise' },
];

// get boards from redux in props
const BoardsOverview = ({ hidden, toggleNewBoardHidden }) => (
  <>
    <ModalAddBoard isOpen={!hidden} close={toggleNewBoardHidden} title='New Card' />
    <StyledBoardsOverview>
      {boards.map(({ id, ...otherProps }) => (<Card key={id} hover {...otherProps} />))}
      <Card text='Create new board' hover onClick={toggleNewBoardHidden} />
    </StyledBoardsOverview>
  </>
);

BoardsOverview.propTypes = {
  hidden: PropTypes.bool,
  toggleNewBoardHidden: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  hidden: selectNewBoardHidden,
});

const mapDispatchToProps = dispatch => ({
  toggleNewBoardHidden: () => dispatch(toggleNewBoardHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsOverview);