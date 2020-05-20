import React from 'react';

import {
  StyledModal,
  Content,
} from './with-modal.styles';

const WithModal = WrappedComponent => ({ isOpen, close, ...otherProps }) => {
  return isOpen ? (
    <StyledModal onClick={(e) => {
      if (e.target === e.currentTarget) {
        close();
      }
    }}>
      <Content>
        <div onClick={close}>
          X
        </div>
        <WrappedComponent {...otherProps} />
        <div>
          END MODAL
        </div>
      </Content>
    </StyledModal>
  ) : null;
};

export default WithModal;
