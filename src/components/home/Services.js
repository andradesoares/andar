import Image from "next/image";
import React from "react";
import ServiceBox from "./ServiceBox";
import * as styles from "./Services-Style";

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
      </styles.Box>
      <styles.Box>
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </styles.Box>
      <styles.Btn>
        <button>Ver Serviços</button>
      </styles.Btn>
    </styles.Container>
  );
};

export default Services;
