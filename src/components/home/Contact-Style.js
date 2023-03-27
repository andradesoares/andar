import styled from "styled-components";

export const Container = styled.section`
  background-color: #eaeff9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 200px 0 5vw 0;
  h3 {
    font-size: 2.6vw;
    line-height: 60px;
    margin: 0 0 50px 0;
    text-align: center;
  }
  img {
    height: 20vw;
    width: 26vw;
  }
  @media (max-width: 900px) {
    h3 {
      margin-bottom: 5vw;
    }
    padding: 5vw 0;
    img {
      height: 25vw;
      width: 32vw;
    }
  }
  @media (max-width: 632px) {
    h3 {
      font-size: 20px;
      line-height: 26px;
      margin: 0 0 30px 0;
    }
    img {
      height: 40vw;
      width: 55vw;
    }
  }
`;

export const Btn = styled.div`
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
