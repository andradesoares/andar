import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 6vw;
  box-sizing: border-box;
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
  .carousel-root {
    display: none;
  }

  @media (max-width: 900px) {
    .text {
      h3 {
        margin-bottom: 1vw;
      }
      p {
        line-height: 2.4vw;
        font-size: 1.8vw;
        margin: 0;
      }
    }
  }
  @media (max-width: 632px) {
    background-color: #eaeff9;
    padding-bottom: 40px;
    margin-bottom: 0;
    .text {
      h3 {
        font-size: 20px;
        line-height: 26px;
        margin: 30px 0;
      }
      p {
        font-size: 14px;
        line-height: 16px;
      }
    }
    .carousel-root {
      display: flex;
      margin-bottom: 20px;
      ul {
        .dot {
          background-color: #292f45;
        }
      }
    }
  }
`;

export const Box = styled.div`
  display: flex;
  margin-bottom: 4vw;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 632px) {
    display: none;
  }
`;

export const Btn = styled.div`
  margin: 0 auto;
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
