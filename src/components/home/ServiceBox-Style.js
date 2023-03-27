import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0 40px;
  border-left: 1px solid #000;
  width: 15vw;
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 5vw;
  :nth-child(1),
  :nth-child(4) {
    border: none;
  }
  p {
    line-height: 25px;
  }
  @media (max-width: 900px) {
    width: 25vw;
    :nth-child(1),
    :nth-child(3),
    :nth-child(5) {
      border: none;
    }
    :nth-child(4) {
      border-left: 1px solid #000;
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
    :nth-child(4) {
      border: none;
    }
  }
`;
