import styled from 'styled-components'

export const Bar = styled.div<{ $num: number }>`
  background-color: green;
  height: 1svh;
  opacity: ${(props) =>
    props.$num === 0
      ? 0.5
      : props.$num > 100
      ? 1
      : 0.5 + (props.$num / 100) * 0.5};
  background: ${(props) =>
    props.$num < 101
      ? `linear-gradient(
    to right,
    rgba(0, 150, 0) 0%,
    rgba(0, 150, 0) ${props.$num}%,
    rgba(200, 200, 200) ${props.$num}%,
    rgba(200, 200, 200) 100%
  );`
      : `linear-gradient(
    to right,
    rgba(0, 150, 0) 0%,
    rgba(0, 150, 0) ${10000 / props.$num}%,
    rgba(200, 0, 0) ${10000 / props.$num}%,
    rgba(200, 0, 0) 100%
  );`};
`
