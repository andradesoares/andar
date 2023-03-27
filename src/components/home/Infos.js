import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as styles from "./Infos-Style";
import foto from "../../../public/foto.jpg";
import Services from "./Services";

const Infos = () => {
  return (
    <styles.Container>
      <styles.Box>
        <Image src={foto} alt="Foto" height={300} width={250} />
        <div>
          <h3>Oi, sou a Marina, uma assistente virtual experiente</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            metus est, semper sed turpis ut, fringilla tincidunt risus. In
            vehicula, enim in mollis facilisis, nisl dui aliquet purus, in
            volutpat.
          </p>
          <styles.Btn>
            <Link href="/sobre">
              <button>Saiba mais</button>
            </Link>{" "}
          </styles.Btn>
        </div>
      </styles.Box>
    </styles.Container>
  );
};

export default Infos;
