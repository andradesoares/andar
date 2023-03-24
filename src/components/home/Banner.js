import Image from "next/image";
import React from "react";
import * as styles from "./Banner-Style";

const Banner = () => {
  return (
    <styles.Container>
      <styles.Title>
        Lorem ipsum
        <br /> dolor sit amet.
      </styles.Title>
      <styles.SubTitle>
        Lorem ipsum dolor sit amet, consectetur.
      </styles.SubTitle>
      <styles.Btn>
        <button>Ver Serviços</button>
      </styles.Btn>
    </styles.Container>
  );
};

export default Banner;
