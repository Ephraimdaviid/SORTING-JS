function insertElement(arr, element, i) {
    // If the array is empty, just insert the element at the beginning
    if (i === 0) {
      arr.unshift(element);
      return;
    }
  
    // Find the first element in the array that is greater than or equal to the element we want to insert
    let j = 0;
    while (j < i && arr[j] < element) {
      j++;
    }
  
    // Insert the element at the index of the first element that is greater than or equal to it
    arr.splice(j, 0, element);
  }
  
  // Example
  var arr = [1, 3, 5, 7, 9];
  insertElement(arr, 2, 4);
  
  console.log(arr); // [1, 2, 3, 5, 7, 9]