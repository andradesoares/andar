import styled from "styled-components";

export const Container = styled.div`
  padding: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    p {
      line-height: 2.4vw;
      font-size: 1.8vw;
      margin: 0;
    }
  }
  @media (max-width: 632px) {
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
`;

export const Flex = styled.div`
  margin-top: 4vw;
  width: 20%;
  display: flex;
  justify-content: space-between;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 30px;
    div {
      width: 100%;
      justify-content: space-around;
      div {
        width: 100%;
      }
    }
  }
`;

export const Box = styled.div`
  position: relative;
  z-index: 1;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Form = styled.div`
  position: absolute;
  background: #ffffff;
  top: 100px;
  left: 40%;
  margin-left: -40vw;
  width: 40vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  padding: 5vw;
  padding-bottom: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5vw;
  }
  .erro {
    color: red;
  }
  @media (max-width: 1400px) {
    top: 60px;
    width: 45vw;
  }
  @media (max-width: 1200px) {
    top: 30px;
    width: 40vw;
  }
  @media (max-width: 1000px) {
    top: 0px;
    width: 40vw;
  }
  @media (max-width: 900px) {
    position: relative;
    top: 0;
    left: 0;
    margin-left: 0;
    width: 100%;
    box-shadow: none;
    box-sizing: border-box;
    padding: 0;
  }
  @media (max-width: 632px) {
    div {
      flex-direction: column;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  label {
    margin-bottom: 10px;
  }
  input {
    border: none;
    border-bottom: 2px solid #eaeff9;
    padding: 0.2vw;
    height: 16px;
    font-size: 0.8vw;
    :focus {
      outline: none;
    }
  }
  @media (max-width: 900px) {
    width: 45%;
  }
  @media (max-width: 632px) {
    width: 100%;
    input {
      margin-bottom: 30px;
      font-size: 12px;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin-bottom: 10px;
  }
  textarea {
    resize: none;
    border: none;
    border-bottom: 2px solid #eaeff9;
    height: 4vw;
    font-size: 0.8vw;
    :focus {
      outline: none;
    }
  }
  @media (max-width: 900px) {
    textarea {
      height: 8vw;
    }
  }
  @media (max-width: 900px) {
    textarea {
      height: 20vw;
      font-size: 12px;
    }
  }
`;

export const Btn = styled.div`
  margin-top: 3vw !important;
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
