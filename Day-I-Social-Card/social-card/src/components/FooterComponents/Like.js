import React, { Component } from 'react';

class Like extends Component {
  constructor() {
    super();
    this.state = { count: 0, stroke: '#808080' };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  handleMouseOver() {
    this.setState({ stroke: '#ff3144' });
  }

  handleMouseLeave() {
    const { count } = this.state;
    if (count === 0) {
      this.setState({ stroke: '#808080' });
    }
  }

  render() {
    const { count, stroke } = this.state;

    return (
      <div
        className="like"
        style={{ color: `${stroke}` }}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        <svg
          id="like"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            fill={count > 0 ? stroke : null}
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
        <div>{count}</div>
      </div>
    );
  }
}

export default Like;
