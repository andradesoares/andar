import React from "react";
import Image from "next/image";
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
            <a href="#">Início</a>
          </styles.Link>
          <styles.Link>
            <a href="#">Serviços e Preços</a>
          </styles.Link>
          <styles.Link>
            <a href="#">Sobre</a>
          </styles.Link>
          <styles.Link>
            <a href="#">Contato</a>
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
