import styled from "styled-components";

export const Container = styled.section`
  background-color: #292f45;
  padding: 5vw 10vw;
  position: relative;
  height: 11vw;
  h3 {
    font-size: 2.6vw;
    margin: 0 0 30px 0;
    text-align: center;
    color: white;
  }
  @media (max-width: 1024px) {
    height: 15vw;
  }
  @media (max-width: 900px) {
    height: 100%;
  }
  .carousel-root {
    display: none;
  }
  @media (max-width: 632px) {
    h3 {
      font-size: 20px;
      line-height: 26px;
      margin: 30px 0;
    }
    .carousel-root {
      display: flex;
      margin-bottom: 20px;
      ul {
        .dot {
          background-color: #292f45;
        }
      }
    }
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 8vw;
  left: 50%;
  margin-left: -45vw;
  width: 80vw;
  padding: 5vw;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    position: relative;
    top: 0;
    left: 0;
    margin-left: 0;
    width: 100%;
    flex-direction: column;
    padding: 0;
  }
  @media (max-width: 632px) {
    display: none;
  }
`;
