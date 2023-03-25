import styled from "styled-components";

export const Container = styled.section`
  background-color: #292f45;
  padding: 10vw;
  position: relative;
  height: 8vw;
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
`;

export const Box = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  margin-left: -23vw;
  width: 35vw;
  padding: 2vw 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
`;
