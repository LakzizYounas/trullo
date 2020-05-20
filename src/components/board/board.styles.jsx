import styled from 'styled-components';

const newBoardStyle = `
  background-image: url(/board_wallpaper/plus.svg);
  background-size: contain;
`;

const imgStyle = imgName => `
  background-image: url(/board_wallpaper/${imgName}.jpg);
  background-size: cover;
`;

export const StyledBoard = styled.div`
  ${({ imgName }) => imgName ? imgStyle(imgName) : newBoardStyle}
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  border-radius: 5px;
  height: 150px;
  min-width: 150px;

  &:hover {
    filter: brightness(85%) drop-shadow(0 0 1mm #ffffff);
    transform: rotate(1deg);
    transform-origin: top left;
  }
`;

export const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0px 0px 5px black;

  margin: 100px auto 0;
`;
