import Image from "next/image";
import React from "react";
import * as styles from "./Depo-Style";
import DepoBox from "./DepoBox";

const Depo = () => {
  return (
    <styles.Container>
      <styles.Box>
        <DepoBox />
        <DepoBox />
        <DepoBox />
      </styles.Box>
      <styles.Box>
        <DepoBox />
        <DepoBox />
        <DepoBox />
      </styles.Box>
      <styles.Btn>
        <button>Entre em Contato</button>
      </styles.Btn>
    </styles.Container>
  );
};

export default Depo;
