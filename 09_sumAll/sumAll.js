const sumAll = function (a, b) {
  let sum = 0;
  if (typeof a !== "number" || typeof b != "number") return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  if (a - Math.floor(a) > 0 || b - Math.floor(b) > 0) return "ERROR";

  let start = a > b ? b : a;
  let end = a < b ? b : a;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
