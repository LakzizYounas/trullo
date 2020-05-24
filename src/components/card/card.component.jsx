import React from 'react';
import PropTypes from 'prop-types';

import {
  ChildContainer,
  Name,
  StyledBoard,
} from './card.styles';

const Card = ({ name, children, ...otherProps }) => (
  <StyledBoard {...otherProps}>
    {name ? <Name>{ name }</Name> : null}
    {children ? <ChildContainer>{children}</ChildContainer> : null}
  </StyledBoard>
);

Card.propTypes = {
  name: PropTypes.string,
  imgName: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Card;
