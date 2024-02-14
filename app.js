// Mapping function
function Mapping(arr, callback) {
    let result = [];
    let accumulator = 0;
  
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
      result.push(accumulator);
    }
  
    return result;
  }
  
  // Callback function
  function callbackFunc(previousSum, currentElement) {
    return previousSum + currentElement;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const mappedResult = Mapping(arr, callbackFunc);
  console.log(mappedResult);
  