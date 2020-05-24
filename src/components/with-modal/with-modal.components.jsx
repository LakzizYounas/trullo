import React from 'react';

import {
  Content,
  Cross,
  Header,
  StyledModal,
  Title,
} from './with-modal.styles';

const WithModal = WrappedComponent => ({ isOpen, close, title, ...otherProps }) => {

  const onClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return isOpen ? (
    <StyledModal onClick={onClick}>
      <Content>
        <Header>
          <Title>{title}</Title>
          <Cross onClick={close} />
        </Header>
        <WrappedComponent {...otherProps} />
      </Content>
    </StyledModal>
  ) : null;
};

export default WithModal;
