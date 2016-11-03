"use strict";

import React from 'react';

export default class Board extends React.Component {

  render() {
    return (
      <div className="board">
        {[...Array(this.props.board.size)].map((c, i, a) =>
          <p key={i + 1}> {i + 1} </p>
        )}
      </div>

    );
  }
}
