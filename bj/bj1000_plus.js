//'/dev/stdin'

const fs=require('fs');
let input=fs.readFileSync('bj/input.txt').toString().split('\n'); //['1 2']

input=input[0]; //1 2
input=input.split(' ').map((item)=>+item); //문자열에서 숫자로 변환

function plus(A,B){
    console.log(A+B);
}

plus(input[0],input[1]) 

/* 백준 코드 
const fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString()
input=input.split(' ').map((item)=>+item); 

console.log(input[0]+input[1]);
*/