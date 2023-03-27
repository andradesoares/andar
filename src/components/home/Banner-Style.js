import styled from "styled-components";
import Default from "../../../public/default.jpg";

export const Container = styled.section`
  background-image: url(${Default.src});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 10vw 0 15vw 0;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 1024px) {
    padding: 5vw 0 15vw 0;
  }
  @media (max-width: 900px) {
    padding: 5vw 0;
  }
`;

export const Title = styled.h1`
  font-size: 3.2vw;
  color: white;
  text-align: center;
  margin: 0 0 20px 0;
  @media (max-width: 1024px) {
    font-size: 3vw;
  }
  @media (max-width: 632px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.h3`
  color: white;
  text-align: center;
  margin: 0 0 20px 0;
  @media (max-width: 1024px) {
    font-size: 2vw;
  }
  @media (max-width: 632px) {
    font-size: 14px;
  }
`;

export const Btn = styled.div`
  margin: 0 auto;
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
