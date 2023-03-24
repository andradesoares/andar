import styled from "styled-components";

export const Container = styled.div`
  background-color: #eaeff9;
  height: 250px;
  position: relative;
`;

export const Box = styled.div`
  position: absolute;
  background: #ffffff;
  top: 135px;
  left: 50%;
  margin-left: -30vw;
  width: 50vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  padding: 80px;
  display: flex;
  justify-content: center;
  h2 {
    margin: 0;
    font-size: 60px;
  }
`;
