import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  StyledBoard,
} from './board.styles';

const Board = ({ router }) => console.log(router) || (
  <StyledBoard>
    {router.location.pathname}
  </StyledBoard>
);

Board.propTypes = {
  router: PropTypes.object,
};

const mapStateToProps = state => ({
  router: state.router,
});

export default connect(mapStateToProps)(Board);
