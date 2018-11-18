import React from "react";

const ButtonContainer = props => {
  return <div className={props.containerStyle}>{props.children}</div>;
};

export default ButtonContainer;
