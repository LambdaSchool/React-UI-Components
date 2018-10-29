import React, { Component } from 'react';

class Retweet extends Component {
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
    this.setState({ stroke: '#58d670' });
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
        className="retweet"
        style={{ color: `${stroke}` }}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        <svg
          id="retweet"
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
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
        {count}
      </div>
    );
  }
}

export default Retweet;
