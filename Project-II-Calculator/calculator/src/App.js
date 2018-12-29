import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstInput: '0',
      operand: '',
      secondInput: '0',
    }
    this.container = React.createRef();
  }

  componentDidMount = () => {
    this.container.current.focus();
  }

  handleInput = event => {
    if (this.state.operand === '') {
      if (this.state.firstInput === '0') {
        this.setState({
          firstInput: event.target.textContent
        });
      } else {
        if (this.state.firstInput.length < 10) {
          this.setState({
            firstInput: `${this.state.firstInput}${event.target.textContent}`
          });
        } 
      };
    } else {
      if (this.state.secondInput === '0') {
        this.setState({
          secondInput: event.target.textContent
        });
      } else {
        if (this.state.secondInput.length < 10) {
          this.setState({
            secondInput: `${this.state.secondInput}${event.target.textContent}`
          });
        } 
      };
    }
   
  };

  handleKeyDown = (event) => {
    if (this.state.operand === '') {
      // if the display is in the cleared state
    if (this.state.firstInput === '0') {
      // if the key pressed is a number
      if (event.key >= 0 && event.key <= 9 && event.key !== ' ') {
        this.setState({
          // set the state of the display to the key that was pressed
          firstInput: event.key
      });
    };
  } else {
    // set maximum lenght of input to be 9
    if (this.state.firstInput.length < 10) {
      // if key pressed is a number
      if (event.key >= 0 && event.charCode <= 9 && event.key !== ' ') {
        this.setState({
          // add the key pressed to the currently state of the display
          firstInput: `${this.state.firstInput}${event.key}`
          });
        };
      }; 
    };
    // handle case where user hits backspace
    if (event.key === 'Backspace') {
      if (this.state.firstInput === '0' || this.state.firstInput.length === 1 ) {
        this.setState({
          firstInput: '0'
        })
      } else {
        this.setState({
          firstInput: `${this.state.firstInput.substring(0, this.state.firstInput.length - 1)}`
        })
      }

    }
    } else {
      if (this.state.secondInput === '0') {
        // if the key pressed is a number
        if (event.key >= 0 && event.key <= 9 && event.key !== ' ') {
          this.setState({
            // set the state of the display to the key that was pressed
            secondInput: event.key
        });
      };
    } else {
      // set maximum lenght of input to be 9
      if (this.state.secondInput.length < 10) {
        // if key pressed is a number
        if (event.key >= 0 && event.charCode <= 9 && event.key !== ' ') {
          this.setState({
            // add the key pressed to the currently state of the display
            secondInput: `${this.state.secondInput}${event.key}`
            });
          };
        }; 
      };
      // handle case where user hits backspace
      if (event.key === 'Backspace') {
        if (this.state.secondInput === '0' || this.state.secondInput.length === 1 ) {
          this.setState({
            secondInput: '0'
          })
        } else {
          this.setState({
            secondInput: `${this.state.secondInput.substring(0, this.state.secondInput.length - 1)}`
          })
        }
  
      }
    }
    // handle operand assignment from keyboard
    if (this.state.operand === '') {
      switch(event.key) {
        case '/':
          this.setState({operand: '\u00F7'})
          break;
        case '*':
          this.setState({operand: '\u00D7'})
          break;
        case '-':
          this.setState({operand: '\u2212'})
          break;
        case '+':
          this.setState({operand: '\u002B'})
          break;
      }
    } 
  };

  handleOperand = event => {
    if (this.state.operand === '') {
      switch(event.target.textContent) {
        case '\u00F7':
          this.setState({operand: '\u00F7'})
          break;
        case '\u00D7':
          this.setState({operand: '\u00D7'})
          break;
        case '\u2212':
          this.setState({operand: '\u2212'})
          break;
        case '\u002B':
          this.setState({operand: '\u002B'})
          break;
      };
    };
  };

  clearDisplay = () => {
    this.setState({
      firstInput: '0',
      operand: '',
      secondInput: '0'
    })
  }

  render() {
  return (
    <div ref={this.container} className="container" tabIndex='0' onKeyDown={this.handleKeyDown}>
      <Display 
        firstInput={this.state.firstInput}
        secondInput={this.state.secondInput}
        operand={this.state.operand}
      />
      <ButtonContainer 
        handleInput={this.handleInput}
        handleOperand={this.handleOperand}
        clearDisplay={this.clearDisplay}
      />
    </div>
    );
  };
}

export default App;
