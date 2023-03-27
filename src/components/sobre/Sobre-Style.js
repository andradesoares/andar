import styled from "styled-components";

export const Container = styled.div`
  padding: 10vw;
  display: flex;
  justify-content: space-between;
  img {
    width: 22vw;
    height: 30vw;
  }
  div {
    width: 60%;
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
  @media (max-width: 900px) {
    flex-direction: column;
    div {
      width: 100%;
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
