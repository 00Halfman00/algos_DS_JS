const ints1 = [1, 3, 4, 5, 7, 9];
const ints2 = [9, 5, 7, 4, 1, 3]; // EDGE CASE: WHAT IF THE ARRAY OF INTEGERS WAS NOT SORTED
/*
  TASK: WRITE A FUNCTION THAT WILL TAKE AN ARRAY OF SORTED INTEGERS AND A TARGET NUMBER.
        FIND ANY PAIR OF ELEMENTS THAT ADD UP TO THE TARGET

  APPROACH: ATTEMPT TO SOLVE THE PROBLEM WITH A TIME COMPLEXITY OF O(N), SPACE COMPLEXITY O(N)
            1. CREATE A HASH TABLE TO STORE KEY VALUE PAIRS AND A PLACEHOLDER VARIABLE
            2. LOOP OVER THE ARRAY ONLY ONCE
            4. ON EACH LOOP SUBTRACT THE INTEGER/ELEMENT AT THE CURRENT INDEX FROM THE TARGET CALL ITS VALUE  difference
            3. ASSIGN DIFFERENCE TO BE THE KEY IN THE HASH TABLE FOR THE VALUE OF THE ELEMENT/INTEGER AT THE CURRENT INDEX
            4. NEXT TIME YOU LOOP, IF THE HASH TABLE HAS THE KEY OF THE CURRENT ELEMENT, YOU'VE FOUND YOUR PAIR
*/

const twoSum = (ints, tar) => {
  res = [];
  if (ints[1]) {
    const hash = {};
    let difference;
    for (let i = 0; i < ints.length; ++i) {
      if (hash[ints[i]]) res[res.length] = [ints[i], hash[ints[i]]];
      difference = tar - ints[i];
      hash[difference] = ints[i];
    }
  }
  return res;
};

console.log(
  'there should be more than one pair that add up to target: ',
  twoSum(ints1, 10)
);
console.log(
  'there should be more than one pair that add up to target: ',
  twoSum(ints2, 10)
);

console.log(
  'an empty array: ',
  twoSum([], 10)
);
console.log(
  'an array with 1 number/element: ',
  twoSum([1], 10)
);

// TARGET = 10
// FOR THE FIRST ELEMENT: 10 - 1 = 9, SO THE PAIR EQUAL TO TARGET WOULD BE ( 1, 9 ) IN THIS CASE
