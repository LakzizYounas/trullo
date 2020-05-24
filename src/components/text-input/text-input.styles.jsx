import styled from 'styled-components';

const normalText = () => `
  color: #5e6c84;
`;

const invertedText = () => `
  color: white;
  text-shadow: 0 0 2px #5e6c84;
`;

export const StyledInput = styled.input`
  display: inline-block;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  ${({ inverted }) => inverted ? invertedText : normalText}
  ${({ fontSize }) => fontSize ? `font-size: ${fontSize}px` : 'font-size: 20px'}
  ;

  width: 100%;
  padding: 12px 20px;

  ::placeholder {
    ${({ inverted }) => inverted ? invertedText : normalText}
    ${({ fontSize }) => fontSize ? `font-size: ${fontSize + 5}px` : 'font-size: 25px'}
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.35);
  }
`;