import styled from 'styled-components';

const newBoardStyle = `
  background-image: url(/board_wallpaper/plus.svg);
  background-size: contain;
  padding-top: 90px;
`;

const imgStyle = imgName => `
  background-image: url(/board_wallpaper/${imgName}.jpg);
  background-size: cover;
`;

const hoverEffect = `
  &:hover {
    filter: brightness(100%)  drop-shadow(1px 1px 1px black);
    transform: rotate(1deg);
    transform-origin: top left;
    cursor: pointer;
  }
`;

export const StyledBoard = styled.div`
  display: flex;
  ${({ imgName }) => imgName ? imgStyle(imgName) : newBoardStyle}
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(90%) drop-shadow(1px 1px 1px black);

  border-radius: 5px;
  height: auto;
  width: 100%;

  ${({ hover }) => hover ? hoverEffect  : null}
`;

export const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0px 0px 5px black;
  align-self: center;
  margin: 0 auto;
`;

export const ChildContainer = styled.div`
`;