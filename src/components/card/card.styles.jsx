import styled from 'styled-components';

const newBoardStyle = `
  background-image: url(/board_wallpaper/plus.svg);
  background-size: contain;
`;

const imgStyle = imgName => `
  background-image: url(/board_wallpaper/${imgName}.jpg);
  background-size: cover;
`;

const hoverEffect = `
  &:hover {
    filter: brightness(85%) drop-shadow(0 0 1mm #ffffff);
    transform: rotate(1deg);
    transform-origin: top left;
  }
`;

export const StyledBoard = styled.div`
  display: flex;
  ${({ imgName }) => imgName ? imgStyle(imgName) : newBoardStyle}
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 5px;
  height: auto;
  width: 100%;

  ${({ hover }) => hover ? hoverEffect  : null}
`;

export const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0px 0px 2px black;
  align-self: center;
  margin: 0 auto;
`;

export const ChildContainer = styled.div`
`;