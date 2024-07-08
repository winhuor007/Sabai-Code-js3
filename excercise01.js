function map(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
function squareNumber(num) {
  return num * num;
}

console.log(map(numbers, squareNumber));
