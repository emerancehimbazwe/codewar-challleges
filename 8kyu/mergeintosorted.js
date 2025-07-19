function mergeArrays(arr1, arr2) {
  // Reverse the arrays if they're in descending order
  if (arr1.length > 1 && arr1[0] > arr1[arr1.length - 1]) {
    arr1 = arr1.reverse();
  }
  if (arr2.length > 1 && arr2[0] > arr2[arr2.length - 1]) {
    arr2 = arr2.reverse();
  }

  // Merge arrays, remove duplicates using a Set, and sort in ascending order
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}