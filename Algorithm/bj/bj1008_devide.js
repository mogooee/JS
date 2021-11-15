//'/dev/stdin'

const fs=require('fs');
let input=fs.readFileSync('bj/input.txt').toString().split('\n'); 

input=input[0]; 
input=input.split(' ').map((item)=>+item); //문자열에서 숫자로 변환

function devide(A,B){
    console.log(A/B);
    
}

devide(input[0],input[1])
