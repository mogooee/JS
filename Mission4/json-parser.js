const tokenizer = (data) => {
  let regex = /[\[]|([0-9])+|[,]+|[\]]/g;
  return data.match(regex);
};

const lexer = (data) => {
  let type;
  data.forEach((e, i) => {
    if (e === "[") {
      type = "LBracket";
    } else if (e === "]") {
      type = "RBracket";
    } else if (e === ",") {
      type = "comma";
    } else if (!isNaN(e)) {
      type = "number";
    }
    data[i] = { type, value: e };
  });
  return data;
};

const parser = (data) => {
  let root = { type: "root", child: [] };
  data.forEach((e) => {
    if (e.type === "LBracket") {
      root.child.push({ type: "array", child: [] });
    }
    if (e.type === "number") {
      root.child[0].child.push({
        type: e.type,
        value: e.value,
        child: [],
      });
    }
  });
  return JSON.stringify([root], null, 2);
};

const data = "[1,2,3]";
tokenizer(data);
lexer(tokenizer(data));
console.log(parser(lexer(tokenizer(data))));
