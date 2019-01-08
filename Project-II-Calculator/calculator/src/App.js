import React, { Component } from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { math: [] };
    this.handleClick.bind(this);
  }
  handleClick = () => {
    console.log("clicked");
  };
  render() {
    return (
      <div className="Wrapper">
        <CalculatorDisplay display="6" />

        <ActionButton
          onClick={this.handleClick}
          name="clear"
          type="wide"
          color="white"
          value="clear"
        />
        <ActionButton
          onClick={this.handleClick}
          name="&#247;"
          type="single"
          color="red"
          value="/"
        />
        <NumberButton
          onClick={this.handleClick}
          name="7"
          type="single"
          color="white"
          value="7"
        />
        <NumberButton
          onClick={this.handleClick}
          name="8"
          type="single"
          color="white"
          value="8"
        />
        <NumberButton
          onClick={this.handleClick}
          name="9"
          type="single"
          color="white"
          value="9"
        />
        <ActionButton
          onClick={this.handleClick}
          name="x"
          type="single"
          color="red"
          value="*"
        />
        <NumberButton
          onClick={this.handleClick}
          name="4"
          type="single"
          color="white"
          value="4"
        />
        <NumberButton
          onClick={this.handleClick}
          name="5"
          type="single"
          color="white"
          value="5"
        />
        <NumberButton
          onClick={this.handleClick}
          name="6"
          type="single"
          color="white"
          value="6"
        />
        <ActionButton
          onClick={this.handleClick}
          name="-"
          type="single"
          color="red"
          value="-"
        />
        <NumberButton
          onClick={this.handleClick}
          name="1"
          type="single"
          color="white"
          value="1"
        />
        <NumberButton
          onClick={this.handleClick}
          name="2"
          type="single"
          color="white"
          value="2"
        />
        <NumberButton
          onClick={this.handleClick}
          name="3"
          type="single"
          color="white"
          value="3"
        />
        <ActionButton
          onClick={this.handleClick}
          name="+"
          type="single"
          color="red"
          value="+"
        />
        <NumberButton
          onClick={this.handleClick}
          name="0"
          type="wide"
          color="white"
          value="0"
        />
        <ActionButton
          onClick={this.handleClick}
          name="="
          type="single"
          color="red"
          value="equal"
        />
      </div>
    );
  }
}

export default App;
