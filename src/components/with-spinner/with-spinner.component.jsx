import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? console.log('withspinner isloading') || (
    <Spinner />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
