import Image from "next/image";
import React from "react";
import * as styles from "./Infos-Style";
import foto from "../../../public/foto.jpg";
const Infos = () => {
  return (
    <styles.Container>
      <styles.Box>
        <Image src={foto} alt="Foto" height={300} width={250} />
        <div>
          <h3>
            Oi, sou a Marina, <br /> uma assistente virtual
            <br /> experiente
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            metus est, semper sed turpis ut, fringilla tincidunt risus. In
            vehicula, enim in mollis facilisis, nisl dui aliquet purus, in
            volutpat.
          </p>
          <styles.Btn>
            <button>Ver Serviços</button>
          </styles.Btn>
        </div>
      </styles.Box>
      <div className="text">
        {" "}
        <h3>Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Vestibulum metus est, semper sed turpis ut, fringilla tincidunt risus.
        </p>
      </div>
    </styles.Container>
  );
};

export default Infos;