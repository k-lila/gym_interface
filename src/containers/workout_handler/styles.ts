import styled from 'styled-components'

export const WorkoutHandlerStyled = styled.main`
  height: 100svh;
  .workoutcontainer {
    width: 100%;
    height: 100svh;
    max-width: 450px;
  }
  .exercises {
    max-width: 500px;
    overflow: auto;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    .workoutcontainer {
      max-height: 800px;
      max-width: 400px;
    }
  }
`
