const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

const filterId = {
  nonSpecialChar(peoples) {
    return peoples.filter((e) => {
      return !e.match(/[~!@#$%^&*()_+{}]+/g);
    });
  },
  nonNum(peoples) {
    let arr = [];
    peoples.filter((e) => {
      arr.push(e.replace(/[0-9]/, ""));
    });
    return arr;
  },
};

console.log(filterId.nonSpecialChar(peoples));
const filterNonSpecialChar = filterId.nonSpecialChar(peoples);
console.log(filterId.nonNum(filterNonSpecialChar));
