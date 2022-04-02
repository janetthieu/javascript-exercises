const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce((previousValue, currentValue) =>
    previousValue + currentValue, initialValue);

  return sumWithInitial;
};

const multiply = function(arr) {
  let newValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    newValue *= arr[i];
  }

  return newValue;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(num) {
	if (num < 0)
    return -1;

  else if (num === 0)
    return 1;
    
  else
    return (num * factorial(num - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
