import styled from 'styled-components'

export const HomeStyled = styled.main`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 1em;
  .info {
    width: 90%;
    height: 20svh;
    margin: 0 auto;
  }
  .container {
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
  .btn-image {
    height: 3em;
    width: 3em;
  }
  .btn-home {
    margin: 3vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35vw;
    height: 35vw;
    i {
      font-size: 3em;
    }
    &--disabled {
      color: gray;
    }
  }
`
