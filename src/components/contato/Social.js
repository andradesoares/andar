import React from "react";
import Image from "next/image";
import * as styles from "./Social-Style";
import LogoInstagram from "../../../public/instagram-black.svg";
import LogoPinterest from "../../../public/pinterest-black.svg";

const Social = () => {
  return (
    <styles.Container>
      <div>
        <h3>Me siga nas redes sociais</h3>
        <div>
          <a href="https://www.instagram.com/andar_mais/">
            <Image
              src={LogoInstagram}
              alt="Logo Instagram"
              width={30}
              height={30}
            />
          </a>
          <a href="https://br.pinterest.com/andar_mais/">
            <Image
              src={LogoPinterest}
              alt="Logo Pinterest"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </styles.Container>
  );
};

export default Social;
