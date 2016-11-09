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



  render() {

const params = (this.props.params === undefined) ? {} : this.props.params
const imgPath = __dirname + "app/images/card_images/"
const boardSize = params.size || DEFAULT_BOARD_SIZE

console.log('boardSize:', boardSize);
console.log('full `this.props`:', this.props);

    const halfBoard = boardSize / 2;

    let randoCheese = randCheese(cheeses, halfBoard);
    // console.log(randoCheese);

    return (
      <div className="board">
        {randoCheese.map((c, i, a) =>
          <div className="card" key={i + 1}>
            <img src={imgPath + c} />
           </div>
        )}
      </div>
    );
  }
}
