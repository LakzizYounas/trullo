import React from 'react';

import {
  StyledHomepage,
} from './homepage.styles';

import BoardsOverview from '../../components/boards-overview/boards-overview.component';

const Homepage = () => (
  <StyledHomepage>
    <BoardsOverview />
  </StyledHomepage>
);

export default Homepage;