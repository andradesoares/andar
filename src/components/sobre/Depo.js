import Image from "next/image";
import React from "react";
import * as styles from "./Depo-Style";
import LogoQuotes from "../../../public/quotes.svg";

const Depo = () => {
  return (
    <styles.Container>
      <styles.Box>
        <Image src={LogoQuotes} alt="Quotes" width={40} height={40} />
        <h3>Lorem ipsum</h3>
        <p>
          &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          at lectus tortor. Nulla tincidunt porta turpis, sed ornare velit
          tincidunt ac. Sed tempus, elit id luctus tincidunt, mi orci pharetra
          risus, a malesuada augue dolor non ipsum. Ut nec faucibus turpis. Nam
          viverra interdum odio. Nam et molestie purus. Donec viverra dolor eu
          sapien ultrices condimentum. Donec euismod, sapien a sodales
          malesuada, quam mi pulvinar turpis, eu auctor felis lacus at felis.
          Etiam hendrerit orci in luctus elementum. Aenean nisl justo, vehicula
          eget dapibus id, vestibulum in ante. &quot;
        </p>
        <h4>John Doe</h4>
      </styles.Box>
    </styles.Container>
  );
};

export default Depo;
