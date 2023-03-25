import Image from "next/image";
import React from "react";
import * as styles from "./Contact-Style";
import Contato from "../../../public/celular.svg";

const Contact = () => {
  return (
    <styles.Container>
      <Image src={Contato} alt="Contato" width={300} height={300} />
      <h3> Lorem ipsum dolor sit amet.</h3>
      <styles.Btn>
        <button>Ver Serviços</button>
      </styles.Btn>
    </styles.Container>
  );
};

export default Contact;
