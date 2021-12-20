const data = require("./json_tree.js");

const findUser = (data) => {
  let arr = [];
  const findName = (obj) => {
    arr.push(obj["name"]);
  };
  const hasChildNode = (obj) => {
    if (obj[key].length) findUserOfSk(obj[key]);
  };
  const findUserOfSk = (data) => {
    data.forEach((obj) => {
      for (key in obj) {
        if (obj[key] === "sk") {
          findName(obj);
        }

        if (key === "childnode") {
          hasChildNode(obj);
        }
      }
    });
  };
  findUserOfSk(data);
  return arr;
};

console.log(findUser(data));
