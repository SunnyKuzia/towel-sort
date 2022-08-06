
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let fullArray = [];
  if (matrix) {
    matrix.forEach((array, i) => {

      if (i % 2 != 0) array.reverse();
      for (let arr of array) {
        fullArray.push(arr);
      }
    });
  }
  return fullArray;
}

