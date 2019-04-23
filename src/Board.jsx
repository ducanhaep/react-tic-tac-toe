import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    let squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
  }

  render() {
    const status = "Next Player: D.A";
    return (
      <React.Fragment>
        <div className="status">{status}</div>
        <div className="board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}
