import styled from "styled-components";

export const Container = styled.div`
  background-color: #292f45;
  padding: 0.8vw 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .mobile {
    display: none;
    width: 30px;
    height: 30px;
    color: white;
  }
  .logo {
    border-radius: 50%;
    margin-right: 15px;
  }
  .info {
    display: flex;
    a {
      display: flex;
      align-items: center;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  h2 {
    margin: 0;
  }
  h4 {
    font-weight: 400;
    margin: 0;
  }
  .whatsapp_float {
    position: fixed;
    bottom: 20px;
    display: flex;
    right: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    color: rgb(41, 47, 69);
    background-color: rgb(234, 111, 102);
    border-radius: 20px;
    z-index: 1;
    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 1366px) {
    .whatsapp_float {
    }
    h2 {
      font-size: 1.8vw;
    }
    h4 {
      font-size: 1.2vw;
    }
  }
  @media (max-width: 1024px) {
    .whatsapp_float {
      display: none;
    }
    .info {
      img {
        width: 10vw;
        height: 10vw;
      }
    }
    div {
      h2 {
        margin: 0;
        font-size: 3vw;
      }
      h4 {
        font-weight: 400;
        margin: 0;
        font-size: 1.8vw;
      }
    }
  }
  @media (max-width: 632px) {
    padding: 10px;
    .mobile {
      display: initial;
    }
    .info {
      width: 80%;
      align-items: stretch;
      div {
        align-items: stretch;
        justify-content: space-evenly;
        h2 {
          font-size: 5vw;
        }
        h4 {
          display: none;
        }
      }
    }
  }
`;

export const Navigation = styled.nav`
  width: 40vw;
  @media (max-width: 900px) {
    width: 60%;
  }
`;

export const Links = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  div {
    width: 9%;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 900px) {
    div {
      display: none;
    }
  }
  @media (max-width: 632px) {
    display: none;
  }
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 16px;
    color: white;
  }
  display: flex;
`;
