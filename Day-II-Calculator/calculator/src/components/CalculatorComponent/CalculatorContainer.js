import React, { Component } from "react";
import "./CalculatorContainer.css";
import Display from "../DisplayComponents/CalculatorDisplay";
import ButtonContainer from "../ButtonComponents/ButtonContainer";
import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton";

class Calculator extends Component {
  state = {
    calcDisplay: "0",
    evalArr: []
  };

  handleClick = e => {
    if (e.target.innerText === "=") {
      let sum = [...this.state.evalArr];
      while (sum[0] === "0") sum.shift();
      return this.setState({
        calcDisplay: eval(sum.join("")),
        evalArr: [eval(sum.join(""))]
      });
    }
    if (e.target.innerText === "clear") {
      return this.setState({
        calcDisplay: "0",
        evalArr: []
      });
    } else {
      let currentVal = e.target.innerText;
      console.log(currentVal);

      return this.setState(prevState => ({
        calcDisplay: eval([...prevState.evalArr, currentVal]),
        evalArr: [...prevState.evalArr, currentVal]
      }));
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display calcDisplay={this.state.calcDisplay} />
        <ButtonContainer containerStyle="btnContainer">
          <ButtonContainer containerStyle="numberSide">
            <ActionButton
              handleClick={this.handleClick}
              buttonStyle="wide numberBtn narrow"
              text="clear"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="7"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="8"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="9"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="4"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="5"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="6"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="1"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="2"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn"
              text="3"
            />
            <ActionButton
              handleClick={this.handleClick}
              buttonStyle="wide numberBtn"
              text="0"
            />
          </ButtonContainer>
          <ButtonContainer containerStyle="operationsSide">
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn bgRed"
              text="/"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn bgRed"
              text="*"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn bgRed"
              text="-"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn bgRed"
              text="+"
            />
            <NumberButton
              handleClick={this.handleClick}
              buttonStyle="numberBtn bgRed"
              text="="
            />
          </ButtonContainer>
        </ButtonContainer>
      </div>
    );
  }
}

export default Calculator;
