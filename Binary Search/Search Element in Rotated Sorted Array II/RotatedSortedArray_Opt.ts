// Problem Statement: Given an integer array arr of size N,
// sorted in ascending order (may contain duplicate values) and a target value k.
// Now the array is rotated at some pivot point unknown to you.
//  Return True if k is present and otherwise, return False.

export const findElementInRotatedSortedArray = (num: number[], k: number) => {
  let low = 0;
  let high = num.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (num[mid] === k) {
      return true;
    }

    if (num[low] === num[mid] && num[mid] === num[high]) {
      low++;
      high--;
      continue;
    }
    if (num[low] <= num[mid]) {
      if (k >= num[low] && k <= num[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (k >= num[mid] && k <= num[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};
const numbers = [3, 3, 3, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3];
const target2 = 9;
const result = findElementInRotatedSortedArray(numbers, target2);
console.log(result);
