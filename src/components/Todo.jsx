import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completeTodo, index }) => {
  return (
    <div className="todo" onClick={() => completeTodo(index)}>
      <span className="todo-text">{text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Todo;
