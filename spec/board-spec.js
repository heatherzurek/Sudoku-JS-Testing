import { Board, isNumberArray, isUniqueArray } from './../src/sudoku-checker.js';

describe('Board', function() {

    it('should test whether an array has numbers between 1 and 9 in it', function() {
      var array = [1, 2, 3, 4, 5];
      var array2 = [11, "fer"];
      expect(isNumberArray(array)).toEqual(true);
      expect(isNumberArray(array2)).not.toEqual(true);
    });

    it('should test whether an array has unique elements', function() {
      var array = [1, 2, 3, 4, 5];
      var array2 = [11, 11, 11];
      expect(isUniqueArray(array)).toEqual(true);
      expect(isUniqueArray(array2)).not.toEqual(true);
    });

    it('should test whether a board object is solved correctly', function() {
      var rowOne = [7, 3, 5, 6, 1, 4, 8, 9, 2];
      var rowTwo = [8, 4, 2, 9, 7, 3, 5, 6, 1];
      var rowThree = [9, 6, 1, 2, 8, 5, 3, 7, 4];
      var rowFour = [2, 8, 6, 3, 4, 9, 1, 5, 7];
      var rowFive = [4, 1, 3, 8, 5, 7, 9, 2, 6];
      var rowSix = [5, 7, 9, 1, 2, 6, 4, 3, 8];
      var rowSeven = [1, 5, 7, 4, 9, 2, 6, 8, 3];
      var rowEight = [6, 9, 4, 7, 3, 8, 2, 1, 5];
      var rowNine = [3, 2, 8, 5, 6, 1, 7, 4, 9];


      var correctBoard = new Board(rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine);
      var incorrectBoard = new Board(rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine);
      expect(correctBoard.checkSolution()).toEqual(true);
      expect(incorrectBoard.checkSolution()).not.toEqual(true);
    });
});
