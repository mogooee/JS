const data = "[1,3]";
//data = [1,[2],[3,[4]]]

const root = { type: "root", child: [] };
const array = { type: "array", child: [] };
//const number = { type: "number", value: 0, child: [] };

function run(data) {
  for (let i = 0; i < data.split("").length; i++) {
    //console.log(data.split("")[i]);

    //child 안
    if (data.split("")[i] === "[") {
      root.child.push(array);
    }
    //숫자면
    if (!isNaN(data.split("")[i])) {
      //number.value = data.split("")[i];
      array.child.push({ type: "number", value: data.split("")[i], child: [] });
      // console.log(array);
      // console.log(array);
    }
  }

  console.log(JSON.stringify(root, null, 2));
}

run(data);
