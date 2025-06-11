//You are given a sorted array of integers and a target, your task is to search for the target in the given array.
//Assume the given array does not contain any duplicate numbers.
// Lett’s say the given array is = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.

function findIndexOfNumber(num: number[], n: number, k: number): number {
  let low = 0;
  let high = n - 1;
  let mid = Math.ceil((low + high) / 2);
  console.log("high", high)
  console.log(low, mid, high);
  let index = -1;
  while (low < mid) {
    if (num[mid] === k) {
      index = mid;
      console.log(mid);
      break;
    }
    if (num[low] === k) {
      index = low;
    break;
    }
    if (k <= num[mid]) {
      high = mid;
    } else {
      low = mid + 1;
    }
    mid = Math.ceil((low + high) / 2);
    console.log("mid",mid)
  }
  return index;
}

const num = [3, 4, 6, 7, 9, 12, 16, 17];
const k = 17;
console.log(findIndexOfNumber(num, num.length, k));
//Bruseforce: O(n^2), O(1)
