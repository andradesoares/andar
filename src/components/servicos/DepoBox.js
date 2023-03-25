import React from "react";
import Image from "next/image";
import * as styles from "./DepoBox-Style";
import LogoQuotes from "../../../public/servicos.svg";

const DepoBox = () => {
  return (
    <styles.Container>
      <Image src={LogoQuotes} alt="Quotes" width={40} height={40} />
      <h3>Lorem ipsum</h3>
      <p>
        &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        venenatis massa nec turpis cursus luctus. Praesent porta rutrum dictum.
        Etiam tempor porta risus, vel ullamcorper.&quot;
      </p>
      <h4>Preço</h4>
    </styles.Container>
  );
};

export default DepoBox;
