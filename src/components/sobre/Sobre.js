import React from "react";
import * as styles from "./Sobre-Style";
import Image from "next/image";
import foto from "../../../public/foto.jpg";

const Sobre = () => {
  return (
    <styles.Container>
      {" "}
      <Image src={foto} alt="Foto" height={300} width={250} />
      <div>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          neque a est vehicula bibendum. Sed laoreet, magna in ornare suscipit,
          magna dolor sagittis arcu, a gravida lectus lectus eget lorem. Aliquam
          placerat laoreet malesuada. Vestibulum nec interdum tellus. Fusce
          fringilla iaculis quam, sit amet semper eros imperdiet vitae. Etiam
          finibus fermentum est sed finibus. Donec id sapien sapien. Curabitur
          mi nisi, dignissim vel odio in, pretium viverra libero. Maecenas
          dapibus, erat vitae blandit suscipit, sem elit mattis tellus,
          ullamcorper volutpat nibh eros a enim. Aenean ornare tortor at sem
          aliquam varius. Duis blandit, nibh semper mollis sagittis, nunc sapien
          elementum magna, vel porta tellus dui eu lacus. Nullam viverra sem ut
          mi tincidunt, at sodales mi laoreet.
        </p>
        <p>
          Morbi eu facilisis dui. In id risus sed mi volutpat tincidunt at vel
          leo. Vestibulum convallis vulputate ligula, sed bibendum tortor. Ut id
          mauris nec erat dignissim venenatis. Donec varius suscipit blandit.
          Integer justo orci, blandit vel tellus eget, volutpat congue libero.
          Suspendisse suscipit, velit nec lacinia fringilla, nulla orci lacinia
          sem, non semper neque magna et mauris.
        </p>
        <p>
          Aenean sit amet varius nulla. Vivamus a porttitor sapien. Aenean ut
          lorem id felis laoreet rutrum. Donec convallis lorem ac elit
          tincidunt, in hendrerit mauris dictum. Vivamus tincidunt, risus non
          sodales ullamcorper, risus nisi convallis ligula, tincidunt tincidunt
          orci nunc id est. Nullam maximus ac ante eget facilisis. Sed accumsan
          a eros ac aliquam. Etiam sagittis scelerisque risus, nec ullamcorper
          massa vulputate et.
        </p>
      </div>
    </styles.Container>
  );
};

export default Sobre;
