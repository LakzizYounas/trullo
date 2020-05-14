import React, { useState } from 'react';

import WithModal from '../with-modal/with-modal.components';

import {
  StyledBoardsOverview,
} from './boards-overview.styles';

import Board from '../../components/board/board.component';
import AddBoard from '../../components/add-board/add-board.component';

const ModalAddBoard = WithModal(AddBoard);

const boards = [
  { id: 'azedzdeaz', imgName: '1', users: [], name: 'Mon giga board' },
  { id: 'qsdaddsq', imgName: '2', users: [], name: 'board2' },
  { id: 'gerzsgrdf', imgName: '3', users: [], name: 'autre board' },
  { id: 'ezrdsvxcv', imgName: '4', users: [], name: 'un boardel' },
  { id: 'ezswdftg', imgName: '5', users: [], name: 'board5' },
  { id: 'juyjtrhreg', imgName: '6', users: [], name: 'boardeciel' },
  { id: 'gtrdfvbrestg', imgName: '7', users: [], name: 'ababoard' },
  { id: 'rztsergwds', imgName: '8', users: [], name: 'babord' },
  { id: 'vdsfqbbx', imgName: '9', users: [], name: 'boardragon' },
  { id: 'htyjtyw', imgName: '10', users: [], name: 'bordelit' },
  { id: 'aqsfergze', imgName: '11', users: [], name: 'boardefalaise' },
];

// get boards from redux in props
const BoardsOverview = () => {
  const [state, setState] = useState({
    showModal: false,
  });

  const toggleModal = () => {
    setState(prevState => ({ ...prevState, showModal: !state.showModal }) );
    console.log('add board overview');
  };

  return (
    <>
      <ModalAddBoard showModal={state.showModal} />
      <StyledBoardsOverview>
        {boards.map(({ id, ...otherProps }) => (<Board key={id} {...otherProps} />))}
        <Board name='Create new board' onClick={toggleModal} />
      </StyledBoardsOverview>
    </>
  );
};

export default BoardsOverview;