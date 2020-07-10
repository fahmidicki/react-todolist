import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <button
        className="header-button main-black-color"
        onClick={showAddToggle}
      >
        {showAdd ? "finish" : "add"}
      </button>
      <h1 className="header-title">To Do Lists</h1>
      <button className="header-button main-red-color" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
