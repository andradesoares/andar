import styled from "styled-components";

export const Container = styled.div`
  padding: 10vw;
  display: flex;
  justify-content: space-between;
  img {
    width: 22vw;
    height: 30vw;
  }
  div {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 2.6vw;
      line-height: 60px;
      margin: 0;
    }
    p {
      line-height: 25px;
      margin: 0;
    }
  }
`;
