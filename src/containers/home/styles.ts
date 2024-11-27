import styled from 'styled-components'

export const HomeStyled = styled.main`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 1em;
  .info {
    p,
    b {
      font-size: 0.9em;
    }
  }

  .btn-image {
    height: 3em;
    width: 3em;
    margin: 15px;
  }
  .btn-home {
    width: 7em;
    height: 7em;
    i {
      font-size: 3em;
    }
`
