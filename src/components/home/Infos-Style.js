import styled from "styled-components";

export const Container = styled.section`
  background: #ffffff;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  height: 25vw;
  box-sizing: border-box;
  @media (max-width: 1366px) {
    height: 20vw;
  }
  @media (max-width: 900px) {
    height: 100%;
    padding: 5vw 10vw;
  }
`;

export const Box = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: #ffffff;
  top: -150px;
  left: 50%;
  margin-left: -34vw;
  width: 70vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  padding: 5vw;
  display: flex;
  justify-content: space-between;
  img {
    height: 22vw;
    width: 18vw;
  }
  div {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 2.6vw;
      line-height: 3.2vw;
      margin: 0;
    }
    p {
      line-height: 25px;
      margin: 0;
    }
  }
  @media (max-width: 1366px) {
    div {
      width: 65%;
      p {
        line-height: 2vw;
        font-size: 1.6vw;
        margin: 0;
      }
    }
  }
  @media (max-width: 900px) {
    position: relative;
    top: 0;
    left: 0;
    margin-left: 0;
    width: 100%;
    box-shadow: none;
    padding: 0;
    div {
      width: 60%;
      justify-content: space-evenly;

      p {
        line-height: 2.4vw;
        font-size: 1.8vw;
        margin: 0;
      }
    }
    img {
      width: 30%;
      height: 30%;
    }
  }
  @media (max-width: 632px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      width: 100%;
      h3 {
        font-size: 20px;
        line-height: 26px;
        margin: 0;
        margin-bottom: 10px;
      }
      p {
        line-height: 16px;
        font-size: 14px;
        margin: 0;
        margin-bottom: 10px;
      }
    }
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 20px;
    }
  }
`;

export const Btn = styled.div`
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
