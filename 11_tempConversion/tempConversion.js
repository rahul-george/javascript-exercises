const convertToCelsius = function (temperature) {
  // (x-32)* 5/9
  let temp = ((temperature - 32) * 5) / 9;
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function (temperature) {
  let temp = (temperature * 9) / 5 + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
