import Image from "next/image";
import React from "react";
import Link from "next/link";
import * as styles from "./Contact-Style";
import Contato from "../../../public/contato.svg";

const Contact = () => {
  return (
    <styles.Container>
      <Image src={Contato} alt="Contato" width={500} height={380} />
      <h3> Lorem ipsum dolor sit amet.</h3>
      <styles.Btn>
        <Link href="/contato">
          <button>Entre em contato</button>
        </Link>
      </styles.Btn>
    </styles.Container>
  );
};

export default Contact;
