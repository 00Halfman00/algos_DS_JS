function construct2DArray(original, m, n) {
  let result = [];
  if (m * n === original.length) {
    for (let i = 0; i < m; i++) {
        result[result.length] = original.slice(i * n, i * n + n);
    }
  }
  return result;
}

const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(construct2DArray(arr1, 3, 5))
