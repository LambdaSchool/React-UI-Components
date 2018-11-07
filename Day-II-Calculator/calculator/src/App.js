import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      operator: '',
      value1: '',
      value2: '',
    }

  }

  calculate = (event) => {
    let value;
    switch(this.state.operator) {
      case '+':  // if (x === 'value1')
        value = (Number(this.state.value1) + Number(this.state.total));
        break;
      case '-':  // if (x === 'value1')
        value = (Number(this.state.value1) - Number(this.state.total));
        break;
      case '*':  // if (x === 'value1')
        value = (Number(this.state.value1) * Number(this.state.total));
        break;
      case '/':  // if (x === 'value1')
        value = (Number(this.state.value1) / Number(this.state.total));
        break;
      default:
        console.log('here')
        break;
    }
    this.setState({operator: ''});
    this.setState({total: `${value}`});
  }


  operator = (event) => {
    this.setState({operator: event.target.textContent});

    if('+-*/'.includes(this.state.total) !== true) this.setState({value1: this.state.total});
    this.setState({total: event.target.textContent});
  }


  handleButton = (event) => {
    if(('+-*/'.includes(this.state.total) && '+-*/'.includes(event.target.textContent) !== true) || this.state.total === '0') {
      this.setState({total: event.target.textContent});
    } else if(event.target.textContent === '=') this.calculate(event);
    else if('+-*/'.includes(event.target.textContent)) this.operator(event);
    else if('0123456789'.includes(event.target.textContent)) this.setState({total: `${this.state.total}${event.target.textContent}`});

    if(event.target.textContent === 'clear') {
      this.setState({total: '0'})
    }
  }

  render() {
    return (
      <div className={'calculator-container'}>
  
        <CalculatorDisplay className={'display'} data={this.state.total}/>
        
        <div className={'button-components'}>

          {[0,7,8,9,4,5,6,1,2,3,'clear'].map( (num) => <NumberButton className={'number-key'} number={num} handlerButton={this.handleButton} /> )}

        </div>
  
        <div className={'action-components'}>
          {[<span>&#43;</span>, '*', '/', '-', '='].map( (action, index) => <ActionButton className={'action-button'} keys={index} action={action} handlerButton={this.handleButton} /> )}
        </div>
        
      </div>
    );
  }
}


export default App;
