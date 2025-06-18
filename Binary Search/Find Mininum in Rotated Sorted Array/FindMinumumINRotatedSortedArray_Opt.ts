// Problem Statement: Given an integer array arr of size N,
//  sorted in ascending order (with distinct values).
//  Now the array is rotated between 1 to N
// times which is unknown. Find the minimum element in the array.

export const findMinInRotatedSortedArray = (nums: number[]) => {
  let low = 0;
  let high = nums.length - 1;
  let min = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //If the array is already sorted may be after crossing the rotated point, We choose the first elementas low.
    if(nums[low]<= nums[high]){
      min= Math.min(nums[low], min)
      break;
    }

    //Find the sorted array is left side
    if (nums[low] <= nums[mid]) {
      min = Math.min(nums[low], min);
      low = mid + 1;
    } else {
      //Sorted array is on right side.
      //find the min value from righ side and elminate all the element on right side.
      min = Math.min(nums[mid], min);
      high = mid - 1;
    }
  }
  return min;
};
const numbers = [3,1,2];
const result = findMinInRotatedSortedArray(numbers);
console.log(result);
