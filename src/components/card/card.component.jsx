import React from 'react';
import PropTypes from 'prop-types';

import {
  ChildContainer,
  Name,
  StyledBoard,
} from './card.styles';

const Card = ({ text, children, ...otherProps }) => (
  <StyledBoard {...otherProps}>
    {text ? <Name>{ text }</Name> : null}
    {children ? <ChildContainer>{children}</ChildContainer> : null}
  </StyledBoard>
);

Card.propTypes = {
  text: PropTypes.string,
  imgName: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Card;
