import React from "react";
import Image from "next/image";
import * as styles from "./Footer-Style";
import LogoInstagram from "../../public/instagram.svg";
import LogoPinterest from "../../public/pinterest.svg";

const Footer = () => {
  return (
    <styles.Container>
      <p>© Copyright 2023</p>
      <p>Andar+</p>
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
      </div>
    </styles.Container>
  );
};

export default Footer;
