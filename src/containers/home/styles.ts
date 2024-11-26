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

  .container {
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 1em;
    max-width: fit-content;
    max-height: fit-content;
  }
  .btn-image {
    height: 3em;
    width: 3em;
    margin: 15px;
  }
  .btn-home {
    margin: 3vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 7em;
    height: 7em;
    i {
      font-size: 3em;
    }
    &--disabled {
      opacity: 0.9;
      color: rgba(100, 100, 100);
    }
  }
`
