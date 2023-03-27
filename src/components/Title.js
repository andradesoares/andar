import React from "react";
import * as styles from "./Title-Style";

const Title = ({ title }) => {
  return (
    <styles.Container>
      <h2>{title}</h2>
    </styles.Container>
  );
};

export default Title;
