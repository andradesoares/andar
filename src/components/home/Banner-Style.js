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
`;

export const Title = styled.h1`
  font-size: 3.2vw;
  color: white;
  text-align: center;
  margin: 0 0 20px 0;
`;

export const SubTitle = styled.h3`
  color: white;
  text-align: center;
  margin: 0 0 20px 0;
`;

export const Btn = styled.div`
  margin: 0 auto;
  button {
    font-family: "Questrial";
    padding: 0.5vw 1vw;
  }
`;
