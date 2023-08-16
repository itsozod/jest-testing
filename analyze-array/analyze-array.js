function analyzeArray(array) {
  if (!validArray(array)) {
    return "Not an array";
  } else {
    const mid = Math.floor(array.length / 2);
    const average = array[mid];

    const min = Math.min(...array);

    const max = Math.max(...array);

    const length = array.length;

    const analyzedArray = {
      average: average,
      min: min,
      max: max,
      length: length,
    };
    return analyzedArray;
  }
}

function validArray(array) {
    if (!Array.isArray(array)) {
      return false;
    }
  
    for (let item of array) {
      if (typeof item !== "number") {
        return false;
      }
    }
  
    return true;
  }
  
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
