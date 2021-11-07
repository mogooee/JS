//'/dev/stdin'
const fs=require('fs');
let input=fs.readFileSync('bj/input.txt').toString().split('\n');

let num=Number(input[0]);

for(let i=1;i<num;i++){  // 

  let correct=0;
  let score=0;

  let line=input[i].trim().split(''); //trim() 공백 제거

    for(let j=0;j<line.length;j++){ 
    //console.log(input[i][j]);
        if(line[j]==='O'){
            correct++;
            score+=correct;   
        }

        else
             correct=0;
     }
      
console.log(score);
}