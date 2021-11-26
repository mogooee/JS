const { parse } = require("path/posix");

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let array = [];

  if (x < 0) return false;

  while (x > 0) {
    onesPlace = x % 10;
    array.push(onesPlace);

    x = parseInt(x / 10);
  }

  for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
    if (array[i] !== array[j]) {
      return false;
    }
  }

  return true;
};

// console.log(isPalindrome(121));
// console.log(isPalindrome(10));
