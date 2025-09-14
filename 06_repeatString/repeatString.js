const repeatString = function (text, repeat) {
  let outText = "";
  if (repeat < 0) return "ERROR";
  for (let i = 0; i < repeat; i++) {
    outText += text;
  }
  return outText;
};

// Do not edit below this line
module.exports = repeatString;
