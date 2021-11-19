// function kangaroo(x1, v1, x2, v2) {
//   let answer = "";

//   for (let i = 0; v1 * i < 10000 && v2 * i < 10000; i++) {
//     if (x1 + v1 * i === x2 + v2 * i) {
//       answer = "yes";
//       break;
//     } else answer = "no";
//   }

//   return answer;
// }

// console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(0, 2, 5, 3));

function kangaroo(x1, v1, x2, v2) {
  let answer = "";

  if (v2 > v1) answer = "NO";
  else {
    //v1>v2
    if (Number.isInteger((x2 - x1) / (v2 - v1))) answer = "YES";
    else answer = "NO";
  }

  return answer;
}

console.log(kangaroo(0, 3, 4, 2));
