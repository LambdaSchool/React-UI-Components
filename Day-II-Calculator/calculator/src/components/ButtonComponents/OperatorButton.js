import React, { Component } from 'react';
import { ops } from './buttonData';
import './Button.css';

class OperatorButton extends Component {
  constructor(props) {
    super(props);
    this.renderOps = this.renderOps.bind(this);
  }

  renderOps() {
    return ops.map((op, index) => (
      <div className={op.name} key={index}>
        {op.sign}
      </div>
    ));
  }

  render() {
    return (
      <div className="operator-buttons">
        {this.renderOps()}
      </div>
    );
  }
}

export default OperatorButton;
