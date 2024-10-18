const ints = [2, 2, 2, 2, 5, 5, 5, 8];
//            i,    j
//            i,       j
//            i           j
//              i           j
const thresh = 4;
const size = 3;
const avgCount = (arr, k, t) => {
  let sum = 0, count = 0, left = 0, right = k - 1, total = 0;

  while (count < k) {
    sum += arr[count];
    ++count;
  }
  while (right <= arr.length) {
    if (sum / k >= t) total++;
      sum -= arr[left];
      sum += arr[right];
    left++;
    right++;
  }
  return total;
};

const avgCount1 = ( arr, k, t) => {
  let sum = 0, total = 0;

  for(let idx = 0; idx < k; ++idx){
    sum += arr[idx];
  }

  for(let i = 0, j = k - 1; j <= arr.length; ++i, ++j){
    if(sum / k >= t) total++;
    sum -= arr[i];
    sum += arr[j];
  }

  return total;
}




// time complexity O(n)
// space complexity O(1)
console.log(avgCount1(ints, size, thresh));
