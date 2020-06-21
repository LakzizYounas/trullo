import styled from 'styled-components';

const imgStyle = imgName => `
  background-image: url(/board_wallpaper/${imgName}.jpg);
  background-size: cover;
`;

export const StyledBoard = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  ${({ imgName }) => imgStyle(imgName)}

  margin: 0 auto;
  min-height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  height: min-content;

  padding: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px white;
`;
