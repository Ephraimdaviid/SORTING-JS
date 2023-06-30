// Problem 1//
function sumDistinctElements(set1, set2) {
    // Create a set to store all the distinct elements.
    const distinctElements = new Set();
  
    // Iterate over the first set and add all the elements to the set.
    for (const element of set1) {
      distinctElements.add(element);
    }
  
    // Iterate over the second set and add all the elements to the set, if they are not already present.
    for (const element of set2) {
      if (!distinctElements.has(element)) {
        distinctElements.add(element);
      }
    }
  
    // Calculate the sum of all the distinct elements.
    let sum = 0;
    for (const element of distinctElements) {
      sum += element;
    }
  
    return sum;
  }
  
  // Test the function.
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const sum = sumDistinctElements(set1, set2);
  console.log(sum); // 13

  //Problem 2//
  function dotProduct(v1, v2) {
    // Initialize the dot product to 0.
    let ps = 0;
  
    // Iterate over the vectors and add the product of the corresponding elements.
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
  
    return ps;
  }
  
  function areOrthogonal(v1, v2) {
    // Calculate the dot product of the vectors.
    let ps = dotProduct(v1, v2);
  
    // Return true if the dot product is 0, false otherwise.
    return ps === 0;
  }
  
  // Test the functions.
  const v1 = [1, 2, 3];
  const v2 = [4, 5, 6];
  const ps = dotProduct(v1, v2);
  console.log(ps); // 30
  const areOrthogonal = areOrthogonal(v1, v2);
  console.log(areOrthogonal); // false