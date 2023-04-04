const convertToCelsius = function(convertTemp) {
  if (isNaN(convertTemp))  {
    return 'ERROR';
  }
  return +(5/9 * (+convertTemp - 32)).toFixed(1);
  
};

const convertToFahrenheit = function(convertTemp) {
  if (isNaN(convertTemp))  {
    return 'ERROR';
  }
  return +(+convertTemp * (9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
