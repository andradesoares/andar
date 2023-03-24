import Image from "next/image";
import React from "react";
import * as styles from "./Depo-Style";
import DepoBox from "./DepoBox";

const Depo = () => {
  return (
    <styles.Container>
      <h3>Lorem ipsum dolor sit amet, consectetur.</h3>
      <styles.Box>
        <DepoBox />
        <DepoBox />
        <DepoBox />
      </styles.Box>
    </styles.Container>
  );
};

export default Depo;
