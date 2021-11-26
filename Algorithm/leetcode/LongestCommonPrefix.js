/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";

  const standard = strs[0]; // flower
  for (let i = 0; i < standard.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== standard[i]) return result;
    }
    result += standard[i];
  }

  if (!result) return "";
  return result;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
