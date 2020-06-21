import PropTypes from 'prop-types';
import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log('error', error);
    console.log('info', info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
};

export default ErrorBoundary;