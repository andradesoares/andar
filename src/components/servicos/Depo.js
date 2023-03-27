import Link from "next/link";
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
        <DepoBox />
        <DepoBox />
        <DepoBox />
      </styles.Box>
      <styles.Btn>
        <Link href="/contato">
          <button>Entre em contato</button>
        </Link>{" "}
      </styles.Btn>
    </styles.Container>
  );
};

export default Depo;
