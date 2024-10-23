import styled from 'styled-components'

export const ExerciseStyled = styled.div.attrs({
  className: 'my-3'
})`
  .edit-btn {
    height: 1em;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-right: 0.25em;
    width: fit-content;
    border: none;
    img {
      height: 100%;
      margin: 0 1vmin;
    }
  }

  .btn-info {
    border: none;
    background-color: transparent;
    height: 2em;
    width: 2em;
    img {
      height: 100%;
    }
  }

  .bg-checked {
    background-color: #c4e0d2;
  }
`
