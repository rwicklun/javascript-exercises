const add = function(X, Y) {
  if (isNaN(X) || isNaN(Y)) {
      return "ERROR";
  } else {
    return +X + +Y;
  }
};

const subtract = function(X, Y) {
	if (isNaN(X) || isNaN(Y)) {
    return "ERROR";
} else {
  return +X - +Y;
}
};

const sum = function(inputArray) {
  if (!Array.isArray(inputArray)) {
    return "ERROR";
  }
  
  let sum = 0;
  inputArray.forEach(number => {
    if ((number !== '') && isNaN(number)) {
      return "ERROR";
  
    }
    sum += +number;
  });
  return sum;
	
};

const multiply = function(inputArray) {
  if (!Array.isArray(inputArray)) {
    return "ERROR";
  }
  
  let product = 1;
  inputArray.forEach(number => {
    if ((number === '') || isNaN(number)) {
      return "ERROR";
  
    }
    product *= +number;
  });
  return product;

};

const power = function(base, exponent) {
  if (isNaN(base) || isNaN(exponent)){
    return "ERROR";
  } else {
    return (+base) ** +exponent;
  }
	
};

const factorial = function(base) {
  if (isNaN(base) || +base < 0){
    return "ERROR";
  }
  base = +base;
  let product = 1;
  for (let index = 1; index <= base; index++) {
    product *= index;
  }
  return product;
	
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
