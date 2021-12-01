function compareTriplets(a, b) {
  let answer = [0, 0];

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) answer[0]++;
    else if (a[i] < b[i]) answer[1]++;
  }

  return answer;
}

//console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
