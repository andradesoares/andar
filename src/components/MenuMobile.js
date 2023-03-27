import { useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Close from "../../public/close-icon.svg";

const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 40%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 18, 17, 0.95);
  padding: 15px 0;
  background: linear-gradient(
    34deg,
    rgba(21, 22, 51, 1) 0%,
    rgba(17, 18, 17, 0.95) 100%
  );
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;
  img {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
    color: white;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      img {
        transform: rotate(0deg);
      }
      nav {
        transform: scale(1);
      }
    `}
`;

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <Image
        src={Close}
        alt="Whatsapp"
        width={40}
        height={40}
        onClick={() => setMenuIsVisible(false)}
      />
      <nav>
        <Link href="/">Início</Link>
        <Link href="/servicos-e-precos">Serviços e Preços</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </Container>
  );
};

export default MenuMobile;
