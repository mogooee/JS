/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const array = s.split("");
  let value = 0;
  let result = 0;

  array.forEach((element, index) => {
    switch (element) {
      case "I":
        value = 1;
        if (array[index + 1] === "V" || array[index + 1] === "X") {
          value = -1;
        }
        break;

      case "V":
        value = 5;
        break;

      case "X":
        value = 10;
        if (array[index + 1] === "L" || array[index + 1] === "C") {
          value = -10;
        }
        break;

      case "L":
        value = 50;
        break;

      case "C":
        value = 100;
        if (array[index + 1] === "D" || array[index + 1] === "M") {
          value = -100;
        }
        break;

      case "D":
        value = 500;
        break;

      case "M":
        value = 1000;
        break;
    }

    result += value;
  });
  return result;
};

// console.log(romanToInt("III")); //3
// console.log(romanToInt("IV")); //4
// console.log(romanToInt("IX")); //9
// console.log(romanToInt("LVIII")); //58
// console.log(romanToInt("MCMXCIV")); //1994
