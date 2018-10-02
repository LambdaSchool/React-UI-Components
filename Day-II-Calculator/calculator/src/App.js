import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const symbols = ["÷", "×", "—", "+", "="];

const App = () => {
  return (
    <div className="container">
      <section className="top">
        <CalculatorDisplay />
      </section>
      <section className="bottom">
        <section className="left">
          <div className="zero-clear">
            <ActionButton action={"clear"} buttonStyle={"action"} />
          </div>

          <div className="numbers">
            {numbers.map(number => (
              <NumberButton displaySymbol={number} buttonStyle={"button"} />
            ))}
          </div>

          <div className="zero-clear">
            <ActionButton action={0} buttonStyle={"action"} />
          </div>
        </section>
        <section className="right">
          <div className="operators">
            {symbols.map(symbol => (
              <NumberButton displaySymbol={symbol} buttonStyle={"operator"} />
            ))}
          </div>
        </section>
      </section>
    </div>
    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>
  );
};
/* {students.map(studentFromMap => (
        <Student studentOnProps={studentFromMap} />
      ))}; */
export default App;
