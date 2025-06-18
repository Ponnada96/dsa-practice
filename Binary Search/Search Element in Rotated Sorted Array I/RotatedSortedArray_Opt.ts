// Problem Statement:  
// Given a sorted and rotated integer array `num` (with distinct values) and a target value `k`, 
// return the index of `k` if found, else return -1.

export const findIsNumberExistsInRotatedShifArray = (num: number[], k: number) => {
  // Binary Search is used because time complexity should ideally be O(log n)

  let low = 0;
  let high = num.length - 1;

  let index = -1; // Default return value if not found

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Midpoint of current range

    if (num[mid] === k) {
      return mid; // Target found at mid
    }

    // Check if the left half is sorted
    if (num[low] <= num[mid]) {
      // If target lies between low and mid, search left half
      if (num[low] <= k && k <= num[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1; // Else search right half
      }
    } else {
      // Else, the right half must be sorted
      if (num[mid] <= k && k <= num[high]) {
        low = mid + 1; // If target is in right half
      } else {
        high = mid - 1; // Else search left half
      }
    }
  }

  return index; // Target not found
}

// Example usage
const numbers = [7, 8, 1, 2, 3, 4, 5, 6]; // Rotated sorted array
const target1 = 1;
const result = findIsNumberExistsInRotatedShifArray(numbers, target1);
console.log(result); // Output: 6 (index of 2)
