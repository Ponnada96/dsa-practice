// Problem Statement:  Given an array of length N.
// Peak element is defined as the element greater than both of its neighbors.
//  Formally, if 'arr[i]' is the peak element, 'arr[i - 1]' < 'arr[i]' and
// 'arr[i + 1]' < 'arr[i]'.
// Find the index(0-based) of a peak element in the array.

// If there are multiple peak numbers, return the index of any peak number.
//Note: For the first element, the previous element should be considered as
// negative infinity as well as for the last element, the next element should be
// considered as negative infinity.

export const findPeakElementInArray = (num: number[]) => {
  for (let i = 0; i < num.length; i++) {
    if (
      (i === 0 || num[i] > num[i - 1]) &&
      (num[i] > num[i + 1] || i === num.length - 1)
    ) {
      return i;
    }
  }
  // for (let i = 0; i < num.length; i++) {
  //   if (i === 0 && num[i] > num[i + 1]) {
  //     return i;
  //   } else if (i === (num.length - 1) && num[i] > num[i - 1]) {
  //     return i;
  //   } else {
  //     if(num[i] > num[i-1] && num[i] > num[i+1]){
  //       return i;
  //     }
  //   }
  // }
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
const result = findPeakElementInArray(numbers);
console.log(result);
