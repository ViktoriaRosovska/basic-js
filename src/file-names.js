const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let changedNamesList = [];
  let namesMap = new Map();
  let count = 1;
  for (let i = 0; i < names.length; i++) {
    if (namesMap.has(names[i])) {
      
      let str = names[i] + "(" + (namesMap.get(names[i])) + ")";
      changedNamesList.push(str);
      if (!namesMap.has(str)) {
        namesMap.set(str, count);
      }
      namesMap.set(names[i], count + 1);
    } else {
        namesMap.set(names[i], count);
        changedNamesList.push(names[i]); 
    }
  }
  return changedNamesList.sort((a, b) => a.localeCompare() - b.localeCompare());
}

module.exports = {
  renameFiles
};
