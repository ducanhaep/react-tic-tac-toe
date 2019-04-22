import React, { Component } from 'react'

export default class Square extends Component {
  render() {
    return (
      <React.Fragment>
        <button className="square">
          {this.props.value}
        </button>
      </React.Fragment>
    )
  }
}
