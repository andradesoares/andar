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
