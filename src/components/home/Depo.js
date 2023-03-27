import Image from "next/image";
import React from "react";
import * as styles from "./Depo-Style";
import DepoBox from "./DepoBox";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Depo = () => {
  return (
    <styles.Container>
      <h3>Lorem ipsum dolor sit amet, consectetur.</h3>
      <styles.Box>
        <DepoBox />
        <DepoBox />
        <DepoBox />
      </styles.Box>
      <Carousel showArrows={false} showStatus={false} showThumbs={false}>
        <DepoBox />
        <DepoBox />
        <DepoBox />
      </Carousel>
    </styles.Container>
  );
};

export default Depo;
