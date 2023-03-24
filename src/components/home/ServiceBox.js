import Image from "next/image";
import React from "react";
import * as styles from "./ServiceBox-Style";
import LogoCalendar from "../../../public/calendar.svg";

const ServiceBox = () => {
  return (
    <styles.Container>
      <Image src={LogoCalendar} alt="Logo Calendario" width={40} height={40} />
      <h4>Lorem ipsum</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
        mauris pellentesque, eleifend leo eu, tincidunt nisi. Quisque leo
        turpis, lobortis nec enim a, vehicula consequat.
      </p>
    </styles.Container>
  );
};

export default ServiceBox;
