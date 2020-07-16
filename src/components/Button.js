import React, { useState } from "react";
import './Button.css'

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  return (
    <button className={`btn btn--state-${variant} btn--size-${size}`}>{props.children}</button>
  );
}
export default Button;