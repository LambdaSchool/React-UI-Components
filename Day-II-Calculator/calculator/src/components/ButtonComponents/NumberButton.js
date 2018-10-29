import React, { Component } from 'react';
import { numbers } from './buttonData';
import './Button.css';

class NumberButton extends Component {
  constructor(props) {
    super(props);
    this.renderNumpad = this.renderNumpad.bind(this);
  }

  renderNumpad() {
    return numbers.map((number, index) => (
      <div className={number.name} key={index}>
        {number.num}
      </div>
    ));
  }

  render() {
    return (
      <div className="number-buttons">
        <div className="clear">clear</div>
        {this.renderNumpad()}
      </div>
    );
  }
}

export default NumberButton;
