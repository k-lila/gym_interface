import styled from 'styled-components'

export const SerieStyled = styled.div<{ $num: number; $togglebg: boolean }>`
  background-color: rgb(
    196,
    224,
    210,
    ${(props) => (props.$togglebg ? props.$num : 0)}
  );
`
