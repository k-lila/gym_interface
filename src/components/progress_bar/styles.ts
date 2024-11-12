import styled from 'styled-components'

export const Bar = styled.div<{ $num: number }>`
  background-color: green;
  position: fixed;
  top: 12vmin;
  left: 0;
  width: 100%;
  height: 30px;
  background: ${(props) =>
    props.$num < 101
      ? `linear-gradient(
    to right,
    rgba(0, 150, 0) 0%,
    rgba(0, 150, 0) ${props.$num}%,
    rgba(200, 200, 200) ${props.$num}%,
    rgba(200, 200, 200) 100%
  );`
      : 'rgba(200,0,0)'};
`
