const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let dnsArrayList = [];
  let idxCount = 0;
  for (let i = 0; i < domains.length; i++) {
    const dnsArray = domains[i].split(".");
    for (let j = 0; j < dnsArray.length; j++) {
      dnsArrayList.push(dnsArray.filter((el, idx) => idx >= idxCount).reverse().join("."));
      idxCount++;
    }
      idxCount = 0;  
  }

  let mapCount = 1;
  let dnsMap = new Map();
  for (let i = 0; i < dnsArrayList.length; i++) {
    if (dnsMap.has(`.${dnsArrayList[i]}`)) {
      dnsMap.set(`.${dnsArrayList[i]}`, mapCount + 1)
    } else {
        dnsMap.set(`.${dnsArrayList[i]}`, mapCount)
      }
    }

  let newArr = {};
  for (let [key, value] of dnsMap.entries()){
      newArr = {...newArr, [key]: value};
  }
  return newArr;
}

module.exports = {
  getDNSStats
};
