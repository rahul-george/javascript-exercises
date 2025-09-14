const removeFromArray = function (arr, ...elements) {
    const newArr = arr.filter((item) => !elements.includes(item));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
