import React from "react";
import Image from "next/image";
import * as styles from "./Header-Style";
import LogoInstagram from "../../public/instagram.svg";
import LogoPinterest from "../../public/pinterest.svg";

const Footer = () => {
  return (
    <styles.Container>
      <div>© 2023 Copyright</div>
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
    </styles.Container>
  );
};

export default Footer;
