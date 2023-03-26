import styled from "styled-components";

export const Container = styled.div`
  background-color: #eaeff9;
  padding: 10vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-end;
  z-index: 0;
  height: 20vw;
  div {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 4vw;
    }
  }
`;
