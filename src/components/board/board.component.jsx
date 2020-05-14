import React from 'react';
import PropTypes from 'prop-types';

import {
  Name,
  StyledBoard,
} from './board.styles';

const Board = ({ imgName, name }) => (
  <StyledBoard imgName={imgName} name={name}>
    <Name>{ name }</Name>
  </StyledBoard>
);

Board.propTypes = {
  imgName: PropTypes.string,
  name: PropTypes.string,
};

export default Board;
