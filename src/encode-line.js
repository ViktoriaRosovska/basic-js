const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = "";
  let countCurrentChar = 1;
  let currentChar = "";
  
  for (let i = 0; i < str.length; i++) {
    if (currentChar !== str[i]) {
      countCurrentChar = 1;
      currentChar = str[i];
    } else {
        countCurrentChar += 1;
        let lastIndex = encodeStr.length - 1;
        if (countCurrentChar > 2) {
         encodeStr = encodeStr.substring(0, lastIndex - 1) + countCurrentChar;
        } else {
            encodeStr = encodeStr.substring(0, lastIndex) + countCurrentChar;
        }
    }
     encodeStr += str[i];
  }
  return encodeStr;
}

module.exports = {
  encodeLine
};
