import styled from "styled-components";

export const Container = styled.section`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  padding: 2vw;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    line-height: 25px;
    text-align: center;
  }
  h3 {
    color: black !important;
    font-size: 2vw;
    margin-top: 1vw;
  }
  img {
    margin-bottom: 0.5vw;
  }
`;
