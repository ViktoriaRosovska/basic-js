const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!(arr instanceof Array)) throw new Error("\'arr\' parameter must be an instance of the Array!");

  let lastWasDiscarded = false;
  const sequencesList = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i+1 <= arr.length - 1)
          sequencesList.push(arr[i+1]);
        break;

      case "--double-prev":
        if (i-1 > 0 && !lastWasDiscarded) 
          sequencesList.push(arr[i-1]);
        break;
        
      case "--discard-prev":
        if (!lastWasDiscarded)
          sequencesList.pop();
        break;

      case "--discard-next":
        lastWasDiscarded = true;
        ++i;
        break;

      default:
        lastWasDiscarded = false;
        sequencesList.push(arr[i]);
        break;
    }
  }

  return sequencesList;
}

module.exports = {
  transform
};
