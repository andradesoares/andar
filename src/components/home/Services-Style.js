import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 6vw;
  .text {
    padding: 1%;
    display: inline-block;
    width: 100%;
    margin-bottom: 4vw;
    h3 {
      font-size: 2.6vw;
      line-height: 60px;
      margin: 0 0 30px 0;
      text-align: center;
    }
    p {
      line-height: 25px;
      margin: 0;
      text-align: center;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  margin-bottom: 4vw;
`;

export const Btn = styled.div`
  margin: 0 auto;
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
