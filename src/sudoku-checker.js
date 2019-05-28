export function Board(rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine) {
  this.rowOne = rowOne;
  this.rowTwo = rowTwo;
  this.rowThree = rowThree;
  this.rowFour = rowFour;
  this.rowFive = rowFive;
  this.rowSix = rowSix;
  this.rowSeven = rowSeven;
  this.rowEight = rowEight;
  this.rowNine = rowNine;
  this.colOne = [rowOne[0], rowTwo[0], rowThree[0], rowFour[0], rowFive[0], rowSix[0], rowSeven[0], rowEight[0], rowNine[0]];
  this.colTwo = [rowOne[1], rowTwo[1], rowThree[1], rowFour[1], rowFive[1], rowSix[1], rowSeven[1], rowEight[1], rowNine[1]];
  this.colThree = [rowOne[2], rowTwo[2], rowThree[2], rowFour[2], rowFive[2], rowSix[2], rowSeven[2], rowEight[2], rowNine[2]];
  this.colFour = [rowOne[3], rowTwo[3], rowThree[3], rowFour[3], rowFive[3], rowSix[3], rowSeven[3], rowEight[3], rowNine[3]];
  this.colFive = [rowOne[4], rowTwo[4], rowThree[4], rowFour[4], rowFive[4], rowSix[4], rowSeven[4], rowEight[4], rowNine[4]];
  this.colSix = [rowOne[5], rowTwo[5], rowThree[5], rowFour[5], rowFive[5], rowSix[5], rowSeven[5], rowEight[5], rowNine[5]];
  this.colSeven = [rowOne[6], rowTwo[6], rowThree[6], rowFour[6], rowFive[6], rowSix[6], rowSeven[6], rowEight[6], rowNine[6]];
  this.colEight = [rowOne[7], rowTwo[7], rowThree[7], rowFour[7], rowFive[7], rowSix[7], rowSeven[7], rowEight[7], rowNine[7]];
  this.colNine = [rowOne[8], rowTwo[8], rowThree[8], rowFour[8], rowFive[8], rowSix[8], rowSeven[8], rowEight[8], rowNine[8]];

  this.squareOne = [rowOne[0], rowOne[1], rowOne[2], rowTwo[0], rowTwo[1], rowTwo[2], rowThree[0], rowThree[1], rowThree[2]];
  this.squareTwo = [rowOne[3], rowOne[4], rowOne[5], rowTwo[3], rowTwo[4], rowTwo[5], rowThree[3], rowThree[4], rowThree[5]];
  this.squareThree = [rowOne[6], rowOne[7], rowOne[8], rowTwo[6], rowTwo[7], rowTwo[8], rowThree[6], rowThree[7], rowThree[8]];

  this.squareFour = [[rowFour[0], rowFour[1], rowFour[2], rowFive[0], rowFive[1], rowFive[2], rowSix[0], rowSix[1], rowSix[2]];
  this.squareFive = [[rowFour[3], rowFour[4], rowFour[5], rowFive[3], rowFive[4], rowFive[5], rowSix[3], rowSix[4], rowSix[5]];
  this.squareSix = [[rowFour[6], rowFour[7], rowFour[8], rowFive[6], rowFive[7], rowFive[8], rowSix[6], rowSix[7], rowSix[8]];

  this.squareSeven = [[rowSeven[0], rowSeven[1], rowSeven[2], rowEight[0], rowEight[1], rowEight[2], rowNine[0], rowNine[1], rowNine[2]];
  this.squareEight = [[rowSeven[3], rowSeven[4], rowSeven[5], rowEight[3], rowEight[4], rowEight[5], rowNine[3], rowNine[4], rowNine[5]];
  this.squareNine = [[rowSeven[6], rowSeven[7], rowSeven[8], rowEight[6], rowEight[7], rowEight[8], rowNine[6], rowNine[7], rowNine[8]];
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
      console.log(" i ", array[i], " j ", array[j]);
      if(array[i] === array[j]) {
        return false;
      }
    }
  }
  return true;
}

Board.prototype.checkSolution = function() {
  for (var propertyArray in this) {
    if (!isNumberArray(propertyArray) || !isUniqueArray(propertyArray)) {
      return false;
    }
  }
  return true;
};
