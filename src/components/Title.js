import React from "react";
import * as styles from "./Title-Style";

const Title = ({ title }) => {
  return (
    <styles.Container>
      <styles.Box>
        <h2>{title}</h2>
      </styles.Box>
    </styles.Container>
  );
};

export default Title;
