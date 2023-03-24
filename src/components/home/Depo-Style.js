import styled from "styled-components";

export const Container = styled.section`
  background-color: #292f45;
  padding: 10vw;
  position: relative;
  height: 11vw;
  h3 {
    font-size: 2.6vw;
    margin: 0 0 30px 0;
    text-align: center;
    color: white;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  margin-left: -45vw;
  width: 80vw;
  padding: 5vw;
  display: flex;
  justify-content: space-between;
`;
