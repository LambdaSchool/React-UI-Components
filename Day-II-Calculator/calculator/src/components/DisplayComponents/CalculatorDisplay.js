import React, { Component } from "react";
import "./Display.css";
import AutoScalingText from "./AutoScalingDisplay";

class Display extends Component {
  render(props) {
    return (
      <div {...props} className="display">
        <AutoScalingText>{this.props.calcDisplay}</AutoScalingText>
      </div>
    );
  }
}

export default Display;
