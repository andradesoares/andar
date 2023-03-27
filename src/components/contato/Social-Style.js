import styled from "styled-components";

export const Container = styled.div`
  background-color: #eaeff9;
  padding: 10vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-end;
  z-index: 0;
  height: 50vw;
  box-sizing: border-box;
  div {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 4vw;
    }
  }
  @media (max-width: 1400px) {
    height: 44vw;
  }
  @media (max-width: 1200px) {
    height: 47vw;
  }
  @media (max-width: 1100px) {
    height: 50vw;
  }
  @media (max-width: 1100px) {
    height: 53vw;
  }
  @media (max-width: 900px) {
    height: 100%;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    div {
      div {
        width: 100%;
        justify-content: space-evenly;
      }
      width: 100%;
    }
  }
`;
