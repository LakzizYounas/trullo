import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, Redirect } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  LeftContainer,
  RightContainer,
  StyledDisplayName,
  StyledHeader,
  StyledSignIn,
  StyledSignOut,
  Logo,
} from './header.styles';

const Header = ({ user, signOutStart, history }) => (
  <StyledHeader>
    <LeftContainer />
    <Logo onClick={() => <Redirect to='/' /> }/>
    <RightContainer>
      {user ?
        <>
          <StyledDisplayName>{user.displayName}</StyledDisplayName>
          <StyledSignOut onClick={signOutStart}>sign out</StyledSignOut>
        </>:
        <StyledSignIn onClick={() => history.push('/sign') }>Sign in</StyledSignIn>
      }
    </RightContainer>
  </StyledHeader>
);

Header.propTypes = {
  user: PropTypes.object,
  signOutStart: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header));