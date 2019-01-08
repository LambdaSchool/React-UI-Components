import React, { Component } from "react";
import "./Display.css";

class CalculatorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="display">
        <p> {this.props.display}</p>
      </div>
    );
  }
}
export default CalculatorDisplay;
