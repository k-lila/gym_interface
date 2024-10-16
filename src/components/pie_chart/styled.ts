import styled from 'styled-components'

export const PieChartStyled = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
`

export const PieSlice = styled.div<{
  $start: number
  $end: number
}>`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: conic-gradient(
    transparent 0%,
    transparent ${(props) => props.$start}%,
    #044040 ${(props) => props.$start + 0.3}%,
    #044040 ${(props) => props.$end - 0.3}%,
    transparent ${(props) => props.$end}%,
    transparent 100%
  );
  mask-image: radial-gradient(circle at center, transparent 35%, black 36%);
`
