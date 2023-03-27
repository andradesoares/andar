import styled from "styled-components";

export const Container = styled.section`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  padding: 2vw;
  justify-content: space-between;
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  p {
    line-height: 25px;
    text-align: center;
  }
  h3 {
    color: black !important;
    font-size: 2vw;
    margin: 0 !important;
  }
  h4 {
    margin: 0;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 5vw;
    h3 {
      margin: 2vw !important;
    }
    h4 {
      margin-top: 2vw !important;
    }
    p {
      line-height: 2.4vw;
      font-size: 1.8vw;
      margin: 0;
    }
  }
  @media (max-width: 632px) {
    width: 100%;
    border: none;
    padding: 20px;
    height: 260px;
    margin: 0 auto;
    background-color: white;
    border-radius: 15px;
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
`;
