import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />{" "}
      {/*id가 이미 porps내에 있으므로 생략가능 */}
    </div>
  );
});

export default Input;
