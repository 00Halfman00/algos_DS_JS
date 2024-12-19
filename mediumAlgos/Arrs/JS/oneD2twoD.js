function construct2DArray(original, m, n) {
  let result = [];
  if (m * n === original.length) {
    for (let i = 0; i < m; i++) {
        result[result.length] = original.slice(i * n, i * n + n);
        //result[result.length] = original.slice(0 * 5, 0 * 5 + 5); //  original.slice(0, 5)
        //result[result.length] = original.slice(1 * 5, 1 * 5 + 5); //  original.slice(5, 10)
        //result[result.length] = original.slice(2 * 5, 2 * 5 + 5); //  original.slice(10, 15)
    }
  }
  return result;
}

const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(construct2DArray(arr1, 3, 5))
