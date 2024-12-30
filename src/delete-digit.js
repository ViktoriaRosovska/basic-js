const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
 let newStr = "" + n;
   for (let i = 0; i < newStr.length - 1; i++){
    if (Number(newStr[i]) < Number(newStr[i+1])) {
      newStr = newStr.replace(newStr[i], "");
      return Number(newStr);
    }
   }
   newStr = newStr.replace(newStr[newStr.length - 1], "");
  return Number(newStr);
}

module.exports = {
  deleteDigit
};
