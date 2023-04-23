import React from "react";

function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit" onClick={props.onSubmit}>OK</button>
    </div>
  );
}

export default TextInput;