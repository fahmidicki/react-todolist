import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";
import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button
        text={showAdd ? "finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      <h1 className={styles.headerTitle}>To Do Lists</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
