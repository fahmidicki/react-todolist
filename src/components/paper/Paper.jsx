import React from "react";
import Proptypes from "prop-types";

import styles from "./paper.module.css";

const Paper = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>{children}</div>
    </div>
  );
};

Paper.Proptypes = {
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node
  ])
};

export default Paper;
