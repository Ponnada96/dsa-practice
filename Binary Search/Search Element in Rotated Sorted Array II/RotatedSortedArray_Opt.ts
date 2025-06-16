// Problem Statement: Given an integer array arr of size N, sorted in ascending order
// (may contain duplicate values) and a target value k.
// Now the array is rotated at some pivot point unknown to you. 
// Return True if k is present and otherwise, return False.


export const findIsNumberExists = (num: number[], k: number) => {
  let low = 0;
  let high = num.length - 1;

  let index = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (num[mid] === k) {
      return mid;
    }
    if (k <= num[mid]) {
      high = mid - 1; // Will remove the not matched mid, decreasing the search space.
    } else {
      low = mid + 1; // Will remove the not matched mid, decreasing the search space.
    }
  }
  return index; // not found
};
const numbers=[7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
const k = 7;
const result =findIsNumberExists(numbers,k);
console.log(result)