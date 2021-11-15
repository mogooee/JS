function solution(a, b) {
  var answer = "";

  const DaysOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`2016-${a}-${b}`); //문자열 -> Date 객체
  let day = date.getDay(); //0-6  요일
  answer = DaysOfTheWeek[day];

  console.log(answer);
  return answer;
}

solution(5, 24);
