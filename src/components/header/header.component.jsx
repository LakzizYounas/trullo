import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  Placeholder,
  StyledDisplayName,
  StyledHeader,
  Logo,
} from './header.styles';

const Header = ({ user }) => (
  <StyledHeader>
    <Placeholder />
    <Logo fill='white' />
    {user ?
      <StyledDisplayName>{console.log(user) || user.displayName}</StyledDisplayName> :
      <div>no user</div>
    }
  </StyledHeader>
);

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(
  mapStateToProps,
)(Header);