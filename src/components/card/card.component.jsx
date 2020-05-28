import React from 'react';
import PropTypes from 'prop-types';

import {
  ChildContainer,
  Name,
  StyledBoard,
} from './card.styles';

const Card = ({ title, children, ...otherProps }) => (
  <StyledBoard {...otherProps}>
    {title ? <Name>{ title }</Name> : null}
    {children ? <ChildContainer>{children}</ChildContainer> : null}
  </StyledBoard>
);

Card.propTypes = {
  title: PropTypes.string,
  imgName: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Card;
