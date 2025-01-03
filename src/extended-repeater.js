const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition = options.addition !== undefined ? String(options.addition) : null;
  const additionSeparator = options.additionSeparator ? String(options.additionSeparator) : "|";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  
  let additionStr = "";
  if (addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i > 0)
        additionStr += additionSeparator;
      additionStr += addition;
    }
  }

  const sss = String(str) + additionStr;
  let repeatStr = "";
  for (let i = 0; i < repeatTimes; i++) {
    if (i > 0)
      repeatStr += separator;
    repeatStr += sss;
  }
  
  return repeatStr;
}

module.exports = {
  repeater
};
