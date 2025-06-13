//You are given a sorted array of integers and a target, your task is to search for the target in the given array.
//Assume the given array does not contain any duplicate numbers.
// Lett’s say the given array is = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.

function findIndexOfNumber(num: number[], n: number, k: number): number {
  let low = 0;
  let high = n - 1;

  let index = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (num[mid] === k) {
      return mid;
    }
    if (k <= num[mid]) {
      high = mid-1; // Will remove the not matched mid, decreasing the search space.
    } else {
      low = mid + 1; // Will remove the not matched mid, decreasing the search space.
    }
  }
  return index; // not found
}

const num = [3, 4, 6, 7, 9, 12, 16, 17];
const k = 17;
console.log(findIndexOfNumber(num, num.length, 6));
//Bruseforce: O(n^2), O(1)
