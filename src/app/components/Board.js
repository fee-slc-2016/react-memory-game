"use strict";

import React from 'react';

export default class Board extends React.Component {

  render() {
    return (
      <div className="board">
        {[...Array(this.props.board.size)].map((c, i, a) =>
          <div className="card" key={i + 1}> {i + 1} </div>
        )}
      </div>

    );
  }
}
