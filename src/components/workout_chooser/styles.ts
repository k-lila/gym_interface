import styled from 'styled-components'

export const WorkoutChooserStyled = styled.div`
  width: 100%;
  height: fit-content;

  .__btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 0.75em;
    background-color: white;
    button {
      margin: 0.75em 0;
      position: relative;
      border: none;
      background-color: transparent;
      height: 100px;
      width: 100px;
      cursor: pointer;
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
    .--workout {
      opacity: 0.5;
      top: -5%;
      height: 30%;
      width: 30%;
      left: 50%;
      transform: translate(-50%, 50%);
    }
`
