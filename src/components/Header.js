import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./Header-Style";
import LogoInstagram from "../../public/instagram.svg";
import LogoPinterest from "../../public/pinterest.svg";
import Andar from "../../public/andar.jpg";

const Header = () => {
  return (
    <styles.Container>
      <div className="info">
        <Link href="/">
          <Image
            className="logo"
            src={Andar}
            alt="Logo Andar"
            width={70}
            height={70}
          />
        </Link>
        <div>
          <p>Andar</p>
          <p>Consultoria de Imagem</p>
        </div>
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
            <a href="https://www.instagram.com/andar_mais/">
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
                alt="Logo Pinterest"
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
