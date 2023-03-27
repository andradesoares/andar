import styled from "styled-components";

export const Container = styled.section`
  background-color: #292f45;
  position: relative;
  padding: 10vw;
  height: 0vw;
  h3 {
    font-size: 2.6vw;
    margin: 0 0 30px 0;
    text-align: center;
  }
  p {
    text-align: center;
    line-height: 25px;
  }
  img {
    margin-bottom: 2vw;
  }

  @media (max-width: 1400px) {
    height: 5vw;
  }
  @media (max-width: 1200px) {
    height: 14vw;
  }
  @media (max-width: 1000px) {
    height: 22vw;
  }
  @media (max-width: 900px) {
    height: 100%;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 160px;
  left: 42%;
  margin-left: -23vw;
  width: 50vw;
  padding: 2vw 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  @media (max-width: 1600px) {
    top: 100px;
  }
  @media (max-width: 1400px) {
    top: 80px;
  }
  @media (max-width: 1200px) {
    top: 50px;
  }
  @media (max-width: 1000px) {
    top: 90px;
  }
  @media (max-width: 900px) {
    position: relative;
    top: 0;
    left: 0;
    margin-left: 0;
    width: 100%;
    box-shadow: none;
    box-sizing: border-box;
    border-radius: 15px;
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
