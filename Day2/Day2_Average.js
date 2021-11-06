const grades = [[88,76,77],[33,44,44],[90,100,94],[30,44,98]];

//const obj = { key:value } 
let sum={student:0,max:0};
let result={student:0,max:0}; 
let StudentAvg=[];

for( let i in grades){
//console.log(i); // 0 1 2 3 
//console.log(grades[i]); // [88,76,77] [33.44,44]
  for( let j in grades[i]){
    sum.student+=grades[i][j]; //88 76 77 
  }  

//toFixed(n) 소수점 반올림
  result.Student=(sum.student/grades[i].length).toFixed(2) // toFixed 소수점 반올림
  StudentAvg.push(result.Student) 
  
// Math.max.apply(null,arr) 
  sum.max+=Math.max.apply(null,grades[i]); 
  result.Max=(sum.max/grades.length).toFixed(2) 

// grades[1] 합계 위해서 sum 초기화  
  sum.student=0; 
}

console.log(`학생들의 평균점수: ${StudentAvg}`);
console.log(`최고점의 평균점수: ${result.Max}`);