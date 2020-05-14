import React from 'react';
import PropTypes from 'prop-types';

import {
  Name,
  StyledBoard,
} from './board.styles';

const Board = ({ name, ...otherProps }) => (
  <StyledBoard {...otherProps}>
    <Name>{ name }</Name>
  </StyledBoard>
);

Board.propTypes = {
  name: PropTypes.string,
  imgName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Board;
