import styled from "styled-components";

export const Container = styled.div`
  padding: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
`;

export const Box = styled.div`
  position: relative;
  z-index: 1;
`;

export const Form = styled.div`
  position: absolute;
  background: #ffffff;
  top: 100px;
  left: 50%;
  margin-left: -40vw;
  width: 30vw;
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
    font-size: 0.8vw;
    :focus {
      outline: none;
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
`;

export const Btn = styled.div`
  margin-top: 3vw !important;
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
