import React, { useState } from "react";
import propTypes from "prop-types";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="addTodo-input"
      />
      <button type="submit">Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: propTypes.func.isRequired,
};

export default AddTodo;
