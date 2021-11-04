import React, { useState } from "react";
import propTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState("");

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
      }
      clear: () => setValue('')
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();
    if (input.value.trim()) {
      onCreate(input.value);
      //setValue("");
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <input {...input} />
      <button type="submit">Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: propTypes.func.isRequired,
};

export default AddTodo;
