import styled from 'styled-components'

export const AcessCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 0.2em;
  height: fit-content;

  .__info {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.75em;
    border-radius: 0.2em;
    display: block;
    article {
      margin-bottom: 0.75em;
    }
    button {
      width: 100%;
    }
  }

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
    .--add {
      opacity: 0.5;
      top: -20%;
      height: 45%;
      width: 45%;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }

  @media screen and (max-width: 767px) {
    .__info {
      width: 100%;
      p,
      b {
        font-size: 1.25em;
      }
    }
    .__btn-container {
      button {
        height: 50vmin;
        width: 50vmin;
      }
    }
  }
`
