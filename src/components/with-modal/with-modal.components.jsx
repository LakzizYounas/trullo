import React from 'react';

const WithModal = WrappedComponent => ({ showModal, ...otherProps }) => {
  return showModal ? (
    <>
      <div>
        BEGIN MODAL
      </div>
      <WrappedComponent {...otherProps} />
      <div>
        END MODAL
      </div>
    </>
  ) : null;
};

export default WithModal;
