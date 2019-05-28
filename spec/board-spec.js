import { Board, isNumberArray, isUniqueArray } from './../src/sudoku-checker.js';

describe('Board', function() {

    it('should test whether an array has numbers between 1 and 9 in it', function() {
      var array = [1, 2, 3, 4, 5];
      var array2 = [11, "fer"];
      expect(isNumberArray(array)).toEqual(true);
      expect(isNumberArray(array2)).not.toEqual(true);
    })
})
