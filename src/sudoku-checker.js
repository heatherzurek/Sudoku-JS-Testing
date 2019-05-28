export function Board(rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine, colOne, colTwo, colThree, colFour, colFive, colSix, colSeven, colEight, colNine, squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine) {
  this.rowOne = rowOne;
  this.rowTwo = rowTwo;
  this.rowThree = rowThree;
  this.rowFour = rowFour;
  this.rowFive = rowFive;
  this.rowSix = rowSix;
  this.rowSeven = rowSeven;
  this.rowEight = rowEight;
  this.rowNine = rowNine;
  this.colOne = colOne;
  this.colTwo = colTwo;
  this.colThree = colThree;
  this.colFour = colFour;
  this.colFive = colFive;
  this.colSix = colSix;
  this.colSeven = colSeven;
  this.colEight = colEight;
  this.colNine = colNine;
  this.squareOne = squareOne;
  this.squareTwo = squareTwo;
  this.squareThree = squareThree;
  this.squareFour = squareFour;
  this.squareFive = squareFive;
  this.squareSix = squareSix;
  this.squareSeven = squareSeven;
  this.squareEight = squareEight;
  this.squareNine = squareNine;
}

export function isNumberArray(array) {
  for (let i = 0; i < array.length; i++) {
    if(typeof array[i] !== "number" || array[i] < 0 || array[i] > 10) {
      return false;
    }
  }
  return true;
}

export function isUniqueArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]) {
        return false;
      }
    }
  }
  return true;
}

// Board.prototype.checkSolution = function() {
//
// };
