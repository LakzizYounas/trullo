import React, { Suspense, lazy, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';

import { selectCurrentUser, selectIsFetching } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const Homepage = lazy(() =>
  import('./pages/homepage/homepage.component'));
const SignInSignUp = lazy(() =>
  import('./pages/sign-in-sign-up/sign-in-sign-up.component'));
const Board = lazy(() =>
  import('./pages/board/board.component'));

const ContentApp = (currentUser) => (
  <ConnectedRouter history={history}>
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          {currentUser ? (<>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/board/:name' component={Board} />
          </>) : (<>
            <Redirect to='/sign'/>
          </>)}
          <Route exact path='/sign' render={() => currentUser ? <Redirect to='/'/> : <SignInSignUp />} />
        </Suspense>
      </ErrorBoundary>
    </Switch>
  </ConnectedRouter>
);

const App = ({ checkUserSession, currentUser, isFetchingUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />
      {isFetchingUser ?
        <Spinner /> :
        ContentApp(currentUser)
      }
    </>
  );
};

App.propTypes = {
  checkUserSession: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  isFetchingUser: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isFetchingUser: selectIsFetching,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
