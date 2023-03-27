import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./Header-Style";
import LogoInstagram from "../../public/instagram.svg";
import LogoPinterest from "../../public/pinterest.svg";
import Whatsapp from "../../public/whatsapp.svg";
import Andar from "../../public/andar.jpg";
import MenuMobile from "./MenuMobile";
import Hamburguer from "../../public/hamburger-menu.svg";

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

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
          <h2>Andar+</h2>
          <h4>Consultoria de Imagem</h4>
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
            <a href="https://br.pinterest.com/andar_mais/">
              <Image
                src={LogoPinterest}
                alt="Logo Pinterest"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://wa.me/2348100000000"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Whatsapp} alt="Whatsapp" width={40} height={40} />
            </a>
          </div>
        </styles.Links>
      </styles.Navigation>
      <Image
        src={Hamburguer}
        alt="Whatsapp"
        width={40}
        height={40}
        onClick={() => setMenuIsVisible(true)}
        className="mobile"
      />
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </styles.Container>
  );
};

export default Header;
