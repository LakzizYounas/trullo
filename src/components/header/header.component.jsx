import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  LeftContainer,
  RightContainer,
  StyledDisplayName,
  StyledHeader,
  StyledSignOut,
  Logo,
} from './header.styles';

const Header = ({ user, signOutStart, redirect }) => (
  <StyledHeader>
    <LeftContainer>
      {user && <StyledDisplayName>{user.displayName}</StyledDisplayName>}
    </LeftContainer>
    <Logo onClick={() => user ? redirect('/') : null}/>
    <RightContainer>
      {user && <StyledSignOut onClick={signOutStart}>sign out</StyledSignOut>}
    </RightContainer>
  </StyledHeader>
);

Header.propTypes = {
  user: PropTypes.object,
  signOutStart: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
  redirect: (path) => dispatch(push(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
