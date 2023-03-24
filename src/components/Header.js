import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./Header-Style";
import LogoInstagram from "../../public/instagram.svg";
import LogoPinterest from "../../public/pinterest.svg";

const Header = () => {
  return (
    <styles.Container>
      <div>
        <p>Andar</p>
        <p>Consultoria de Imagem</p>
      </div>
      <styles.Navigation>
        <styles.Links>
          <styles.Link>
            <Link href="/">Início</Link>
          </styles.Link>
          <styles.Link>
            <Link href="/servicos-e-precos">Serviços e Preços</Link>
          </styles.Link>
          <styles.Link>
            <Link href="/sobre">Sobre</Link>
          </styles.Link>
          <styles.Link>
            <Link href="/contato">Contato</Link>
          </styles.Link>
          <div>
            <a href="#">
              <Image
                src={LogoInstagram}
                alt="Logo Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src={LogoPinterest}
                alt="Logo Instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
        </styles.Links>
      </styles.Navigation>
    </styles.Container>
  );
};

export default Header;
