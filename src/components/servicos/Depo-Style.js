import styled from "styled-components";

export const Container = styled.section`
  padding: 10vw;
  padding-bottom: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 2.6vw;
    margin: 0 0 30px 0;
    text-align: center;
    color: white;
  }
`;

export const Box = styled.div`
  padding-top: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Btn = styled.div`
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
