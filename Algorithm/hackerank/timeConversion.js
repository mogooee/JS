function timeConversion(s) {
  // Write your code here
  let answer = "";
  let Hour_12 = s.substring(0, 2);
  let conversion = "";

  if (Hour_12 < 12) {
    answer = s.substring(0, 8);

    if (s.includes("PM")) {
      conversion = s.replace(Hour_12, Number(Hour_12) + 12);
      answer = conversion.substring(0, 8);
    }
  } else {
    answer = s.substring(0, 8);

    if (s.includes("AM")) {
      conversion = s.replace(Hour_12, Number(Hour_12) + 12 - 24);
      //앞에 0추가
      if (Number(Hour_12) + 12 - 24 < 10) {
        conversion = s.replace(Hour_12, "0" + (Number(Hour_12) + 12 - 24));
        answer = conversion.substring(0, 8);
      }
      answer = conversion.substring(0, 8);
    }
  }

  return answer;
}
console.log(timeConversion("12:01:00AM"));
