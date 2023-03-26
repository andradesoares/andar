import styled from "styled-components";

export const Container = styled.div`
  background-color: #292f45;
  padding: 0.8vw 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
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
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-top: 10px;
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
`;

export const Navigation = styled.nav`
  width: 35%;
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
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
  display: flex;
`;
