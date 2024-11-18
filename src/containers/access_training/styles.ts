import styled from 'styled-components'

export const AccessTrainingStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40svh;
  .btn-access {
    width: 40%;
    height: 80%;
    margin: auto 0;
    color: white;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    span {
      padding: 0.5em;
    }
    &--left {
      border-radius: 0% 2em 2em 0%;
      background-color: rgba(150, 150, 150);
    }
    &--right {
      border-radius: 2em 0% 0% 2em;
      background-color: #212529;
    }
    &--ontraining {
      color: white;
      background-color: transparent;
      border: none;
      width: 100%;
      height: 50%;
    }
  }
`
