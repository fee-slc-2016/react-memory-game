"use strict";

import React from 'react';

const DEFAULT_BOARD_SIZE = 8;

const cheeses = ['cheese1.jpeg', 'cheese2.jpg', 'cheese3.png', 'cheese4.png', 'cheese5.jpg'];
const fisherYates = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const randCheese = (arr, length) => {
  let newArr = arr.slice();
  newArr = fisherYates(newArr);
  newArr = newArr.slice(0, length);
  let secondArr = newArr;
  secondArr.map( (c) => newArr.push(c) );
  newArr = fisherYates(newArr);
  return newArr;
};

export default class Board extends React.Component {



  render(params) {

console.log('params: ', params);

    const halfBoard = (this.board === undefined) ? DEFAULT_BOARD_SIZE/2 : this.props.board.size / 2;

    let randoCheese = randCheese(cheeses, halfBoard);
    // console.log(randoCheese);

    return (
      <div className="board">
        {randoCheese.map((c, i, a) =>
          <div className="card" key={i + 1}>
            <img src={"./app/images/card_images/" + c} />
           </div>
        )}
      </div>
    );
  }
}
