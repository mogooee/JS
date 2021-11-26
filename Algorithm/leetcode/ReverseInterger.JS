var reverse = function (x) {
  let splitValue = x.toString().split("");

  if (splitValue[0] === "-") {
    splitValue.shift();
    splitValue.reverse();
    return `-${Number(splitValue.join(""))}`;
  } else if (splitValue[splitValue.length - 1] === "0") {
    if (splitValue.length > 1) {
      splitValue.pop();
    } else {
      return 0;
    }
  }
  return Number(splitValue.reverse().join(""));
};

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));
// console.log(reverse(0));
// console.log(reverse(1534236469));
