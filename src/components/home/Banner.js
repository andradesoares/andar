import Image from "next/image";
import React from "react";
import Link from "next/link";
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
      {/* <styles.Btn>
        <Link href="/sobre">
          <button>Ver Serviços</button>
        </Link>
      </styles.Btn> */}
    </styles.Container>
  );
};

export default Banner;
