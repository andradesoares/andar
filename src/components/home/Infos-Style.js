import styled from "styled-components";

export const Container = styled.section`
  background: #ffffff;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  height: 25vw;
`;

export const Box = styled.div`
  position: absolute;
  background: #ffffff;
  top: -150px;
  left: 50%;
  margin-left: -34vw;
  width: 58vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  padding: 5vw;
  display: flex;
  justify-content: space-between;
  img {
    height: 19vw;
    width: 16vw;
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 2.6vw;
      line-height: 60px;
      margin: 0;
    }
    p {
      line-height: 25px;
      margin: 0;
    }
  }
`;

export const Btn = styled.div`
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
