import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import ServiceBox from "./ServiceBox";
import * as styles from "./Services-Style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Services = () => {
  return (
    <styles.Container>
      <div className="text">
        {" "}
        <h3>Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Vestibulum metus est, semper sed turpis ut, fringilla tincidunt risus.
        </p>
      </div>
      <styles.Box>
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </styles.Box>
      <Carousel showArrows={false} showStatus={false} showThumbs={false}>
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </Carousel>
      <styles.Btn>
        <Link href="/servicos-e-precos">
          <button>Ver Serviços</button>
        </Link>
      </styles.Btn>
    </styles.Container>
  );
};

export default Services;
