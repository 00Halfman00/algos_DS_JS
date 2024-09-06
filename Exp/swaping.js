const ints = [1,2];
const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
const ints2 = [1, 2, 3, 4, 5, 6, 7, 9, 8, 10, -24];

/*
  **  COMPONENTS OF PIVOT SORT, PARTICULARLY THE SWAPPING OF ELEMENTS IN THE
      ARRAY AND THE MOVEMENT OF ALL ELEMENTS SMALLER THAN A CHOSEN ELEMENT BEING
      PLACED TO THE LEFT OF THE CHOSEN ELEMENT IN THE ARRAY. THE CHOSEN ELEMENT IS
      USUALLY THE FIRST ELEMENT IN THE PASSED IN ARRAY.

  1.  CREATE A FUNCTION NAMED swap
      A.  IT WILL TAKE AN ARRAY AND TWO INDICES AS ITS PARAMETERS
          I.    THE FIRST PARAMETER WILL REPRESENT AN ARRAY NAMED arr
          II.   THE SECOND PARAMETER WILL REPRESENT THE FIRST/LEFT INDEX NAMED idx1
          III.  THE THIRD PARAMETER WILL REPRESENT THE SECOND/RIGHT INDEX NAMED idx2
      B.  IT WILL SWAP THE ELEMENT AT INDEX idx1 WITH THE ELEMENT AT INDEX idx2 IN
          THE arr ARRAY.

  2.
*/

const swap = (arr, idx1, idx2) => {
  [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
 }
 const pivot = (arr, startIdx = 0, endIdx = arr.length-1) => {
  const pivotElement = arr[startIdx];
  let swapIdx = startIdx;

  for(let i = startIdx + 1; i < arr.length; ++i){
    if(pivotElement > arr[i]){
      ++swapIdx;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, startIdx, swapIdx);
 }
 pivot(ints2);
 console.log(ints2);



