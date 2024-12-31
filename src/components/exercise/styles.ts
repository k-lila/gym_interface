import styled from 'styled-components'

export const ExerciseStyled = styled.div<{ $num: number }>`
  .bgcolor {
    background-color: rgb(196, 224, 210, ${(props) => props.$num});
  }
`
