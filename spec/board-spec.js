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
});
